---
title: "Array manipulation in JavaScript"
date: "2021-05-09"
category: "Software Engineering"
tags:
  - software-engineering
  - javascript
  - eloquent-javascript
---

A colleague recently recommended the book [Eloquent JavaScript](https://eloquentjavascript.net), and said that they learned a lot from it. This is a colleague who's really active in the "furthering engineering education" movement at Wayfair, and I respect him a lot, so when he recommended the book, I took notice. 

I've started working my way through it, and it starts off pretty simple. Here's an overview of the data types, that kind of thing. That said, I've been faithfully completing the exercises, simple though they may be. 

I'm currently up to [Chapter 4](https://eloquentjavascript.net/04_data.html) in the book, when I encountered this exercise: 

> Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

> Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

I'll readily admit that I had a little trouble doing this from first principles. I did complete the exercise, but it took me a couple of minutes.

```
const range = (start, end, step = 1) => {
  if (step === 0) {
    throw new Error('step cannot be 0');
  }

  let result = [];
  let curr = start;

  // this is not flawless. range(2, 5, 2) will infinite loop
  while (curr !== end) {
    result.push(curr);
    curr += step;
  }

  // push in that final result
  result.push(curr);

  return result;
};

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total;
}
```

I've been using array built in methods for so long now that I felt *dirty* accessing an array with a direct index. And calling `.push()`? I'm a huge proponent of functional programming, so I've just blocked it out of my memory as something that's just not allowed. 

Stylistically, this code pains me. It seems error prone, and it invites someone to bastardize it. Having worked in a codebase that has been in development for over 15 years, I've seen functions that started off with a simple for loop, and more and more stuff has been added to those for loops until they're 2000 line behemoths that no one understands. 

I'd prefer something a bit more like this: 

```
const range = (start, end, step = 1) => {
  if (step === 0) {
    throw new Error('step cannot be 0');
  }
  
  const finalLength = Math.abs(
    Math.floor((end - start) / step)
  ) + 1;
  
  return [...Array(finalLength).keys()]
      .map(x => start + (x * step));
};

const sum = (arr) => arr.reduce((acc, elem) => acc + elem, 0);
```

It's a bit more terse, but it's also really succinct, and because I'm using built in functions, there's no invitation for someone to come along and add unrelated functionality - they'll only add the new functionality here if they *really* believe it belongs here. 

More importantly, this version avoids the infinite loop bug that's called out in the first version - since we're not looping based on the passed in values, we can simply generate the values we need in a single pass, arithmetically. 

My point is this: write your code as expressively as you can, but code defensively. Use built in methods as much as possible, and for the love of god, PLEASE AVOID DIRECT ARRAY INDEXING.
