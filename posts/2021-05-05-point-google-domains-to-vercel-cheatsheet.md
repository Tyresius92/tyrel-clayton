---
title: "Point Google Domains to Vercel Cheatsheet"
date: "2021-05-03"
category: "Personal Finance"
tags:
  - web-development
  - software-engineering
  - domains
  - cheatsheet
---

For this website, I needed to point my existing domain (which used to point to a Heroku application) to Vercel, where I decided to host my Next.js website. 

The process to actually do this was pretty simple. 

1. Log into Google Domains. 
2. Delete all existing records in the "Synthetic records" and "Custom resource records" sections. 
3. Create an A record which points to the IP address given by Vercel.
4. Create a CNAME record which points to the URL given by Vercel. 
5. Wait about five minutes for all the records to propagate, although this could (apparently) take longer.

That's it!