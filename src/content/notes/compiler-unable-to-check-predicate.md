---
title: "SwiftCompile: The compiler is unable to type-check this expression in reasonable time..."
date: 2024-09-07
keywords: swift, xcode, predicate
draft: false
---

# The problem
While working on a Swift/iOS project, I had to fetch data via SwiftData and ended up with this predicated:

```swift
let predicate = #Predicate<Entry> {
    $0.processingState != .processed && $0.processingState != .cancelled
        && ($0.processingState == .failed && $0.failure != nil && $0.failure.count < 5) // Failed but has only failed less than 5 times
}
```

The next build I ran froze and I cancelled it, cleared the build cache and tried again, that did not work. Eventually, I let it run for however long it wanted and ended up with this strange error message:

![Error message displayed in Xcode](/images/screenshots/swift-predicate-error.png)

# Take 1
The expression looks simple enough to not cause problems but turns out `#Predicate` doesn't like enums and the compiler just has no idea how to handle that (uh?). This is the first workaround I tried to fix this stupid issue:

```swift
let processed = ProcessingState.processed
let cancelled = ProcessingState.cancelled
let failed = ProcessingState.failed
let predicate = #Predicate<Entry> {
    $0.processingState != processed
        && $0.processingState != cancelled
        && ($0.processingState == failed && $0.failure != nil && $0.failure.count < 5) // Failed but has only failed less than 5 times
}
```


If you are wondering, no, the code below will not work, it requires you to explicitly "freeze" the values OUTSIDE the predicate (as we did above).

```swift
let predicate = #Predicate<Entry> {
    $0.processingState != ProcessingState.processed
        && $0.processingState != ProcessingState.cancelled
        && ($0.processingState == ProcessingState.failed && $0.failure != nil && $0.failure.count < 5) // Failed but has only failed less than 5 times
}
```

# Take 2
There's another problem here, `Entry.failure` is optional, the compiler also doesn't like optionals in `#Predicate`, so this in fact still won't compile! Here's how I fixed it:

- Make `failure` not optional but give it a default value
```diff
@Model
class Entry {
  ...
-  var failure: Failure?
+  var failure: Failure = Failure(reason: .none, message: "", count: 0)
  ...
}
```

> **NOTE**: SwiftData doesn't like this either! SwiftData/CoreData will most likely fail to initialize if you don't handle the migrations manually now (or if you already have data in there). Also, this is an absolute mess now, `failure` should be nil by default, but nope, the compiler does not like it and I have to handle trivial things like uniqueness and nil-ability in code (even SQLite handles these things fine, I probably should have just used that but I wanted free iCloud sync :eye_roll:).

- Remove the nil check (because I suppose this counts as an `Optional` check and it doesn't like it still?)
```diff
let predicate = #Predicate<Entry> {
    $0.processingState != processed
        && $0.processingState != cancelled
-        && ($0.processingState == failed && $0.failure != nil && $0.failure.count < 5) // Failed but has only failed less than 5 times
+        && ($0.processingState == failed && $0.failure.count < 5) // Failed but has only failed less than 5 times
}
```

# TLDR;
SwiftData has a lot of annoying limitations, especially when used with CloudKit (you literally cannot have unique or non-optional values), the compile errors are not very useful and you have to write hacky code to get it to work! The compiler does not like a lot of things and you WILL be forced to write horrible code to get around these senseless limitations; oh yeah, there are like a thousand ways to do almost every single thing too it seems, and endless syntax.

I might resort to just dealing with the devil I know (React Native) or Tauri Mobile for the tiny mobile apps I make for myself. I definitely have a lot of skill issues when it comes to Swift and the whole shebang surrounding it but this time, it wasn't my fault.
