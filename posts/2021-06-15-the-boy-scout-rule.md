---
title: "The Boy Scout Rule"
date: "2021-06-15"
category: "Software Engineering"
tags:
  - software-engineering
  - rant
---

So, there's already tons out on the internet about the [Boy Scout Rule](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html), so I'm not about to go and wax poetic about all the benefits. Just, do the thing. Make stuff better. 

I actually want to rant today about a pattern that I've seen on a number of projects I've worked on, and in particular I see it when re-writing or re-architecting projects. 

For instance, I was working on a project recently where we were combining a few similar order management tools into one tool with a few pathways. In one of the legacy tools, we displayed just the product (a lamp, for instance), but in the others, we displayed the product along with the selected quantity. When creating mocks for the combined tool, this behavior was replicated!

Rather than thinking through what the new tool needed to do, we were just going to thoughtlessly replicate the behavior. When our product team was asked "what should this behavior be?" the default answer is generally "I don't know - what does the old tool do?" For some reason, the default behavior seems to be to stick with the status quo, rather than try to create the best possible tool, or even to make incremental improvements to the tool we have. 

The point here is not that I want to rant (although I do), but rather to serve as a reminder: don't just stick with the status quo. 

Generally, the status quo is an arbitrary decision that someone made a long time ago to get the product shipped. Take the time, now, to try to make small incremental improvements. You don't make things better by asking "what does the old tool do?" Challenge those old ideas, and ask if they still make sense based on the needs you have today. Otherwise, you're going to find out that someone else is going to ask that question, and you'll be left behind. 