---
title: Go-ing to Rust
date: 30 November 2023
keywords: go, golang, rust, programming
description: Go is really nice, I like it but... I am going to use Rust more, here's why
---

## Prelude (or whatever you'd call this)

Over a year ago, after writing languages like PHP and Typescript for a long while, I wanted to make the move to a statically-typed & compiled language and Go was the first option I had (because I had seen [Lanre](https://twitter.com/lanreadelowo) use it a lot), and on the surface, it looked simple enough and people would not stop talking about its concurrency model, simplicity, compile speed and yada yada yada. Rust was another option for me (you know who put it in my head, if you don't, it's [this guy](https://twitch.tv/theprimeagen)) but as soon as I read a few lines of Go code, I really liked it too, it seemed enough and I saw what they saw; the beauty, the simplicity coupled with speed my primary languages at the time would only dare dream of and even better, it all ended up as one binary I could throw or *not* throw in an alpine docker image (compared to the hassle involved in dockerizing a PHP or Node application, tsk).

Go was also a good option at the time because I had started to make a move towards the dev tooling space and a LOT of tools like Docker, Railway's CLI (at the time) etc... were built in Go, it had to be that good, right?. At this point, I was pretty decent at Typescript which I still use till this day but only where it should be (on the darn frontend!) and I was pretty much in love with the type system, I mean, I know it's not "real" (those types don't eventually _really_ affect your final output) but it felt really powerful to be able to bend my editor (I use NeoVim BTW) to guide me towards the light with every keystroke, there was no going back on types now.
