# Create Elemet method in react

### Intro

This method is used to create react elements.

### createElement(type, props, ...children)

### Parameters

1. **type:**The type argument must be a valid React component type. It could be string of tag name ("h1" or "div") or React component(functional, class or special component like Fragment).

2. **props:** We can pass an object or null. createElement will create an element with the same props we passed. ref and key props are special.

3. optional ...children: zero or more child nodes. They can be React nodes like ReactElements, strings, numbers, empty nodes (null, undefined, true and false) and an array of Reactnodes.

### Return

This will return an react element with few properties.

- type: The passed type argument.
- props: The passed props except ref and key.
- ref: passed value otherwise null.
- key: passed value otherwise null.

### Example

```js
const heading = React.createElement("h1", null, "Namaste React");
console.log(heading); // below lines represnts the output.

// $$typeof: Symbol(react.element)
// key: null
// props: {children: 'Namaste React'}
// ref: null
// type: "h1"
// _owner: null
// _store: {validated: false}
// _self: null
// _source: null
// [[Prototype]]: Object
```
