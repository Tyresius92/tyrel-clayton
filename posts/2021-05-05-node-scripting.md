---
title: "Node Scripting"
date: "2021-05-05"
category: "Software Engineering"
tags:
  - software-engineering
  - node
---

Today I wrote a short script to stub out my blog post Markdown files. All of these markdown files begin with something that looks a bit like this: 

```
---
title: "Node Scripting"
date: "2021-05-05"
category: "Software Engineering"
tags:
  - software-engineering
  - node
---
```

Writing these all out by hand is, to put it bluntly, boring. Not only that, but I'm likely to make a mistake - mistype `category` as `catgeory` or something like that. 

This is a prime opportunity for scripting, and it's not as scary or difficult as you might expect. When I do node scripting I'm always reminded that there's a TON of stuff built into node that generally gets ignored, and it's a real pleasure to spin up something that I'm actually going to use a lot. 

So the next time you find yourself doing something more than 3 times, especially if you're copy-pasting and then modifying, take a couple of minutes and just write a quick script. You'll thank yourself later. 

PS. Here's my script, in full: 

```
const fs = require('fs');
const path = require('path');

const args = process.argv;
const newPostTitle = args[2];

const today = new Date();

const getPaddedNumString = num => num.toString().padStart(2, '0');

const currentDate = `${today.getFullYear()}-${getPaddedNumString(
  today.getMonth() + 1
)}-${getPaddedNumString(today.getDate())}`;

const normalizedTitle = newPostTitle.toLowerCase().replace(/ /g, '-');

const filename = `${currentDate}-${normalizedTitle}.md`;

const fullPathName = path.join(process.cwd(), 'posts', filename);

if (fs.existsSync(fullPathName)) {
  console.log(`Error: File with name ${fullPathName} already exists`);
  process.exit(1);
}

const yaml = `---
title: "${newPostTitle}"
date: "${currentDate}"
category: "TODO"
tags:
  - TODO
---`;

fs.writeFileSync(fullPathName, yaml);

console.log(`New file created at ${fullPathName}`);

process.exit(0);
```