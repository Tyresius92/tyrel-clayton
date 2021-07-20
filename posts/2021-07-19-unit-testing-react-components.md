---
title: "Unit Testing React Components"
date: "2021-07-19"
category: "Software Engineering"
tags:
  - react
  - unit-testing
  - software-engineering
  - javascript
  - react-testing-library
  - jest
  - best-practices
  - rant
---

OK, so here's the thing. I've seen a lot of unit tests in which we're just asserting on test IDs being in the DOM. And that's a really garbage way to write React unit tests. A far better way to test is based on aria roles (in other words, testing based on the role that the component fulfills on the page). 

### Example time!!!

Suppose I have a component that renders a radio group to select a reason, and then once I have selected a reason, it should display a textarea to collect some additional information, but only _after_ I've selected a primary reason.

An appropriate test for this component might look like the below: 

```
it('Renders the text box only when a reason has been selected', () => {
  const {queryByRole, queryAllByRole, rerender} = render(
    <MockProvider>
      <ReasonSelect {...mockProps} />
    </MockProvider>
  );

  // I expect one radio button per reason
  const reasonSelectables = queryAllByRole('radio');
  expect(reasonSelectables).toHaveLength(mockReasons.length);

  // the text input shouldn't show up until a reason is selected
  const textInput = queryByRole('textbox');
  expect(textInput).not.toBeInTheDocument();

  // simulate a reason being selected by rerendering with new props
  rerender(
    <ReasonSelect
      {...mockProps}
      value={{
        selectedReason: mockReasons[0],
        additionalInfoText: '',
      }}
    />
  );

  // I still expect one radio per reason
  const rerenderedRasonSelectables = queryAllByRole('radio');
  expect(rerenderedRasonSelectables).toHaveLength(mockReasons.length);
  
  // The textbox should show up now
  const renderedTextInput = queryByRole('textbox');
  expect(renderedTextInput).toBeInTheDocument();
});
```

### Why is this pattern nicer than checking for test IDs?
- This pattern simulates the user experience MUCH more closely, and asserts on the actual behavior I care about.
- This test is asserting on the product spec, rather than on the implementation details.
- I can remove a test ID without breaking the component’s functionality. The test fails, but my component works. Similarly, I can make the test pass by fudging around the test IDs, while the component itself can be hella broken. That means that my test is asserting on things that don’t actually matter.
- I can read the test and understand what the component DOES, without ever needing to look at the implementation.

Okay, that's all well and good Tyrel, but what if I just don't know what the roles on the component are? Figuring out what they are is a lot more work than just slapping a test ID in there. 

NOT. ANYMORE.

To get your aria roles, just do the following: 

```
import {logRoles} from '@testing-library/react'; 
import {renderToString} from 'react-dom/server';

const temp = document.createElement('div');
temp.innerHTML = renderToString(
  <MyArbitraryComponent {...mockProps} someProp="iWantToCustomize" />
);

logRoles(temp);
```

This will produce the following output:
```
{
  generic: [
    HTMLDivElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    }
  ],
  heading: [
    HTMLHeadingElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    }
  ],
  radio: [
    HTMLInputElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    },
    HTMLInputElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    },
    HTMLInputElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    },
    HTMLInputElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    }
  ],
  textbox: [
    HTMLTextAreaElement {
      [Symbol(SameObject caches)]: [Object: null prototype]
    }
  ]
}
```

Boom she-boom. There you go. Do the thing and be happy with far more helpful unit tests. 