---
title: "HTML Elements Cheatsheet"
date: "2021-05-20"
category: "Software Engineering"
tags:
  - software-engineering
  - css
  - html
  - cheatsheet
---

### Notes on CSS and Document types

Although CSS is primarily used with HTML, it can be used with any XML based document. That said, I'm a web developer, so we're gonna focus on HTML in most cases. 

When working with XML documents, you almost have to use CSS, as XML does not generally have the inherent styling that HTML does. It works very similarly though. 

### Element types

There are two main types of element: Replaced elements and Non-replaced elements

- Replaced Elements
  - These are elements that do not display their children directly, but instead point to some external resource. 
  - The quintessential replaced element is the `<img />` tag. 
- Non-replaced elements
  - These are elements that display their children directly.
  - Examples include elements like `<div>Hello</div>` and `<p>Goodbye</p>`

### Element Display Roles

- Block Level
  - Elements that generally take up the full width of the parent, and by default can't have other elements beside them
- Inline-level
  - Elements that are, well, in line. 

Example: The `<em>` tag in `<p>This is <em>important</em></p>` is inline. The `<p>` tag is a block level element. 

While that is the default behavior, there is nothing stopping you from overriding that behavior with CSS. For instance, this would be completely legal (although it would display weirdly): 

```
p: {
  display: inline;
}
em: {
  display: block;
}
```

However, putting a `<p>` tag in an `<em>` tag is NOT okay. That would not be legal HTML, although some browsers may still force it to work.

