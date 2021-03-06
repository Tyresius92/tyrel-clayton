// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
const args = process.argv;
const newPostTitle = args[2];

const today = new Date();

const getPaddedNumString = num => num.toString().padStart(2, '0');

const currentDate = `${today.getFullYear()}-${getPaddedNumString(
  today.getMonth() + 1
)}-${getPaddedNumString(today.getDate())}`;

const normalizedTitle = newPostTitle
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/\?/g, '');
const filename = `${currentDate}-${normalizedTitle}.md`;

// eslint-disable-next-line no-undef
const fullPathName = path.join(process.cwd(), 'posts', filename);

if (fs.existsSync(fullPathName)) {
  console.log(`Error: File with name ${fullPathName} already exists`);
  // eslint-disable-next-line no-undef
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

// eslint-disable-next-line no-undef
process.exit(0);
