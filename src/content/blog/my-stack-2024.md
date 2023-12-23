---
title: My Stack
date: 23 December 2023
description: Things I use, will use and probably will continue to use.
keywords: stack, rust, typescript, php, gleam, golang, language, programming
draft: false
---

I have talked about the languages, frameworks, databases etc. I use and why I use them from time to time on Twitter but never in a structured way, this article will be a somewhat complete answer to questions around my 'stack', and we will be talking about everything; language, framework, ORM, monitors, headphones etc. You do not have to agree with my reasons for picking these things, that is fine, it's subjective. I spent a larger part of 2023 exploring different areas to figure out what else was out there, what I liked, what I didn't like, what works for me, what doesn't etc.

> When I started writing this article, I was still away from social media trying to survive my school assessments and by the end, I may still be, which means this article might be up for weeks before we get to discuss about it but I would still love to have a discussion around it if you want.
>
> Yes, I am still behind on that planned website redesign too

Before we get into all that though, I think it's fair I give you a bit more context around what I need, what I think software should be like and all that. The more I explored, the more I ran into BROKEN software, not one or two bugs here and there but broken; whether it be bugs that made them unusable or a UX that did not seem like it was made for actual humans (this all discussion is for another article), I started to see a pattern, it felt like no one cared about software anymore, everyone wants to 'ship' as they call it, no one seems to be willing to put it the work to make their software an experience they'd want to use or they have a really low bar for quality? I don't know but from most discussions I have had with most of these _shippers_ on Twitter, it seems to be both.

Yes, I am judging you, I am judging us, I wish we would adopt the work ethics of game developers; IMO, game dev is so hard and requires a lot of discipline, no one is going to buy a game with "This production version works but you know, x just doesn't work yet, don't press y because it may delete your save data" or any of such narratives around it. I am guilty of this too, I have written bad software that I am ashamed of, I have written horrible code I would never want to see the light of day so, before I get to write an article on the state of software and how everyone should do better, I need to do better too.

Oh dear, that was... uh, quite the rant, but I promise we are actually getting into this section's purpose now. To do better, I have decided that for both software meant to be delivered into the hands of users and ones that would never be seen by the user:

- I need to write software with no bugs that could and should have been caught before it ever made it out
- No taking shortcuts around handling failures/errors/exceptions
- Performance should never be an afterthought, it should be woven into every line of code
- Re the point above, not trying to fit a square in a circle; possible but at what cost? A.K.A. please stop writing abominations (Laravel for mobile apps? what???)
- Be able to verify the state of a piece of software with certainty (tests, readable enough to know what the hell is going on etc)

These are just summaries, there are a lot more to do and I know they may not make sense to you now but you will understand as we go deeper.
