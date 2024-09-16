# 1. Is JSX mandatory for React?

- No, JSX is not mandatory for React. You can build an entire React App without JSX.
- JSX is JavaScript Syntax Extension, which allows to write HTML like markup inside a JS file.
- React is a JavaScript library.
- React and JSX are used often together to make our development process easy.
- During compilation phase, JSX will be converted into React Elements by transpiler like Babel.
- Transpilers internally use `React.createElement()` to convert JSX into React ELements.
- In other words, we can say JSX is simply syntatic sugar to create React Elements.

### Conclusion

- Yes, you can create your React App without JSX. But code maintability and readability is difficult.

# 3. How to write comments in JSX?

- In JSX, we can write comments using curly braces.

```js
const jsx = (
  <div>
    {/*This is a single comment */}
    <h1>Hello World!</h1>
    {/*This is a mutline comment
    lorem epsun
    lorem epsun
     */}
  </div>
);
```

# 4. What is the difference between `{Header}` `{<Header/>}` and `{<Header> </Header>}` in JSX?

- when you write `{Header}` inside JSX. It will not render this Header component on the browser.
- #### Reason:

  - React Functional Component is a Javascript function that returns JSX.
  - When you write `{Header}` you're referring to the `Header` component, not invoking the `Header` component.
  - That's the reason your `Header` component is not rendered on the browser.

- when you write `{<Header/>}` inside JSX, it will render `Header` component on the browser.

- #### Reason:

  - When write like this `{<Header/>}`, it's a JSX way of invoking the `Header` component, that return JSX and later will be rendered on the browser.

- when you write `{<Header></Header>}` inside JSX, it will render `Header` component on the browser.

- #### Reason:
  - This is similar to the `{Header/>}`, but only difference is, it gets a `children` property in props object, which will be used for passing JSX to the component.

# What is Virtual DOM in React?

- Virtual DOM is in-memory representation of actual DOM.
- Okay, what does it means? React Stores the structure of actual DOM in the form of JS objects in memory. This what it means representation of actual DOM.
- oh Okay why it is required?
  - Manipulating the actual DOM is a costly operation that means it takes huge tole on the performance of your App.
  - To solve this problem, React uses Virtual DOM concept.
- Okay, Can you explain, how React solves the Problem using Virtual DOM?
  - When you starts your React APP, React creates a virtual DOM for the entire UI and stores it in memory.
  - Whenever any re-renders happen (because of state/ prop cahnges), React creates another Virtual DOM with the changed UI.
  - Then, React compares the latest two virtual DOMs and identifies the difference between them using Diffing algorithm.
  - Once, the changes are Identified, React pushes these changes to tha actual DOM in a batch wise.
  - Instead of re-rendering the entire DOM, the changes portion are only re-rendered.
  - This is how react optimizes the performance of Application.
  - This entire process is called `Reconciliation`.
