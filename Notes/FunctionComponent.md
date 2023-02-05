---
noteId: '3aad5db0e17b11ec90837bd8a98fe836'
tags: []
---

# What is Function Compnent?

Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.

Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

React lifecycle methods (for example, componentDidMount) cannot be used in functional components.

There is no render method used in functional components.

These are mainly responsible for UI and are typically presentational only (For example, a Button component).

Functional components can accept and use props.

Functional components should be favored if you do not need to make use of React state.

# is Function Component StateFull?

Functional components lack a significant amount of features as compared to class-based components. The gap is made up with the help of a special ReactJS concept called “hooks”. Hooks are special functions that allow ReactJS features to be used in functional components.

ReactJS has access to a special hook called useState() that can be used for giving the illusion of working with the state in functional components. The useState() is used to initialize only one state variable to initialize multiple state variables, multiple useState() declarations are required. The first value returned is the initial value of the state variable, while the second value returned is a reference to the function that updates it. When the state variable needs to be updated, it can be done by calling the update function and by updating the state variable directly inside it.

Functional components do not have access to lifecycle functions like class-based components do since lifecycle functions need to be defined within the boundaries of a class. If lifecycle functions need to be used with functional components, a special React hook called useEffect() needs to be used. It is worth noting that useEffect() isn’t an exact duplicate of the lifecycle functions – it works and behaves in a slightly different manner.

Data is passed from the parent component to the child components in the form of props. ReactJS does not allow a component to modify its own props as a rule. The only way to modify the props is to change the props being passed to the child component. This is generally done by passing a reference of a function in the parent component to the child component. Props have more significance in functional components for the simple reason that functional components do not have access to a state, unlike class-based components.

# When We use Function component?

The components created using the ES2015 class template are known as class components.

to understand when should we use class or function components. We need to understand the concept of the state of the component first

In the case of class components, when the state of the component is changed then the render method is called. Whereas, function components render the interface whenever the props are changed.

Although we should prefer using function components most times as React also allows using state with function components in React version 16.8 and later by using the useState hook, which is also recommended by Meta (Facebook App) itself. But for the older react versions, we can use class components where we have a dependency on the state of the components.

# A Class Component Can hold :

**props**

**hooks(useEffect,useState)**

**functions**

# Benifit of Function Component

<ol>
<li>Less Code</li>
<li>there is no scope of this keyword So there no nedd of bind</li>
<li>Easy it write test Cases</li>
<li>Simple Java script Function</li>
<li>no State</li>
</ol>