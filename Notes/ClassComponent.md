---
noteId: 'b545c600e11e11eca4cd7f15ea1934d1'
tags: []
---

# What is Class Compnent?

When creating a React component, the component's name must start with an upper case letter.
The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.

These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.

# is Class Component StateFull?

The main feature of **class-based** components that **distinguished** them from functional components is that they have access to a **state which dictates the current behavior and appearance of the component**

This state can be modified by calling the **setState()** function. **One or more variables, arrays, or objects defined as part of the state can be modified at a time with the setState() function**.

**React Hooks introduced in version 16.8, we are able to declare a stateful component without declaring a class**

# Component Constructor

If there is a **constructor()** function in your component, this function will be called when the component gets **initiated**.

The **constructor** function is where you initiate the **component's properties**.

In React, **component properties** should be kept in an **object** called **state**.

The **constructor** function is also where you honor the **inheritance** of the parent component by including the **super()** statement, which **executes the parent component's constructor function**, and your component has **access to all the functions** of the parent component (React.Component).

# When We use Them?

The components created using the ES2015 class template are known as class components.

to understand when should we use class or function components. We need to understand the concept of the state of the component first

In the case of class components, when the state of the component is changed then the render method is called. Whereas, function components render the interface whenever the props are changed.

Although we should prefer using function components most times as React also allows using state with function components in React version 16.8 and later by using the useState hook, which is also recommended by Meta (Facebook App) itself. But for the older react versions, we can use class components where we have a dependency on the state of the components.

# A Class Component Can hold :

**props**
**Construcur**
**state**
**Lifecycle Methods**