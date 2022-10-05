---
layout: ../../layouts/BlogLayout.astro
title: Attack
date: 28 May 2022
description: We got "attacked" for some reason I am yet to figure out and it seemed quite pointless at first but, was it really?
keywords: security, product, attack, cybersecurity
draft: false
---

At 21:49, about three hours after the end of the AMA Twitter space we had today, Frokes sent me a screenshot with the caption **"Bro 🤯".** As soon as I saw the picture on the notification card or pop-up, whatever you want to call it, I knew it was from the wait-list application, which is an internal app we use to keep track of the wait-list. I quickly stopped what I was doing to check the text.

It was surprising because we had just added about a quarter of all the people on our list in just three hours, and that made an alarm go off in my head. After the space, I, Frokes, other team members, and even the official Frikax account all got a few new followers, but I knew that even with those numbers, it was impossible to get that many new people on the list within that period of time.

I switched out of iMessage almost right away to check the app myself, and I was right: they were fake emails. The requests were almost evenly spaced apart, so it was clear that someone was using a bot or looped script to send these emails. But this wasn't the first time I'd seen something like this. A couple of months ago, before vetaCloud's wait-list went public on Twitter, it had similar attacks, with Dipo waking up to about **250** fake emails, I can't remember the exact count.

The first question Frokes asked me as soon as I showed him proof that they were junk emails was **"Why?"** and that was indeed the right question, why would anyone go through the stress of attacking a wait-list with junk emails? To what end? To gain what exactly? Multiple access to the beta? Of course, that makes no sense too, most services often have at least email verification methods during sign-up, so why?

> _EDIT_: Thinking the attacks would have stopped, I re-enabled the API before going to sleep around 4am, but we woke up to over 600+ fake emails. And after a bit of googling, I found out the attack might be to test our current database to find out what emails we already have and then use leaked passwords on the internet to attempt to gain access to these accounts during the beta, but yup! Just like you, it still doesn't make a lot of sense to me. Either way, I looped through and deleted the fake emails, reinforced the API, added ReCAPTCHA on both ends and setup data offloading.

Although I had intended to rest today, I had a pretty $hitty day which has just ended with a client making me go through **multiple** minor but infuriating revisions and explaining things I had previously explained days ago, phew! To be fair, I had a 50-minute Halo gaming session before getting to work earlier; probably the most I have had in months.

Now, I'm going to sit back and keep watching the new season of Stranger Things and go to bed early like a normal human (I am probably fooling myself). This is all I have to say until the next thing worth writing about. Oh, you should probably add ReCAPTCHA to your application too 👍. Ciao!
