# createRoot

### Intro

This method is used for creating React root which is used for displaying content inside browser's DOM element.

#### createRoot(domNode, options?)

### Parameters

1. domNode: A DOM element. React will create a root for this DOM element and allow you to call functions on the root, such as render to display rendered React content.

### Return

It will return an object with two methods i.e., render and unMount.

### Note

- Call root.render to display a piece of JSX (“React node”) into the React root’s browser DOM node.

- The first time you call root.render, React will clear all the existing HTML content inside the React root before rendering the React component into it.

- If you call render on the same root more than once, React will update the DOM as necessary to reflect the latest JSX you passed. React will decide which parts of the DOM can be reused and which need to be recreated by “matching it up” with the previously rendered tree. Calling render on the same root again is similar to calling the set function on the root component: React avoids unnecessary DOM updates.

### Example

```js
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(heading);
```
