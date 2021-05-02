---
title: "Structuring application directories"
date: "2021-05-01"
---

So, I'm working on building out a blogging platform (this site) using the [Next.js](https://nextjs.org) framework. By and large, I'm really happy with the framework, but as I'm running through the tutorial, I've got a gripe.

The gripe is not with NextJS itself - this is a problem endemic to software projects, and I was first exposed to it when I started working with the MVC architecture. (NextJS prompts this because they suggest creating a `styles` directory to hold all of my CSS files.)

I genuinely don't understand why we think it's a good idea to structure applications by storing the same _kind_ of files together. Putting all of my views together, but separate from all of my controllers (and both of those are separate from my models) doesn't make sense.

Imagine you're a woodworker, and you're setting up a woodshop. You're not going to keep all your hammers together, while all your chisels are stored (together) in a totally different part of the shop. This would just be inefficient and lead to needing to walk across the shop multiple times just to do one simple task. Instead, you're going to put your sledgehammer with the rest of your demolition tools, and your tack hammer with the rest of your finishing tools. That way, when doing some particular task, all the tools you need for your current task are _right where you need them_.

For a perhaps more accessible example, I wouldn't store my mop and my bucket in separate locations just because they're different tools - I store them with the rest of my cleaning supplies so that its easy to simply start cleaning.

When structuring software applications, we should store files related to the same feature together. This means that if I have a Layout component, the associated CSS file should be stored right next to it, _right where you need it_ when working on the Layout component.

Stop organizing files by the kind of file, and start organizing them so that the files you are likely to work with together are stored together.
