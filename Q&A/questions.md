
1. How to implement oops in js ?
  * Abstraction
  * Inheritance
  * Encapsulation
  * Polymorphism

2. Authentication vs Authorization ?
  * Authentication - Authenticate someone's identity
  * Authorization - Provide access a particular resource

3. What is webpack ?
  * Webpack is a bundler-based build tool, which means that to serve your application, it needs to crawl, process, and concatenate your application's entire JavaScript file. 

4. CSS Preprocessors ?
  * A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. 
  
  * There are different pre processors :
    * Sass
    * SCSS
    * LESS
    * Stylus

5. How to create custome frameworks in css or js ?

6. What is reusable components ?
  * define a class with some functionality and export, then we can import and extend in other classes to reuse it.

7. How to use constant values ?
  * we can use separate constant veriable file and import it to the main file

8. Event Bubbling and Event Capturing ?
  * Event capturing - propagation from ancestor elements to child element 
  * Event bubbling - propagation from child element to ancestor elements

9. How to select html elements and iterate over it ?
    ```js
    const nodeList = document.querySelectorAll(".example");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundColor = "red";
    }
    ```
10. What is jQuery and how it is different from javascript ?
  * jQuery is a javascript library when javascript is a programming language.
  * jQuery is written is javascript to make the programming easier.

11. How to increase website performance ?
  * Optimize Image Sizes (loading lazy / small size)
  * Use a Content Delivery Network (CDN) for js , jquery, bootstrap links
  * Minify and Combine CSS, JavaScript, and HTML Files
  * Load JavaScript Asynchronously (async / defer)
  * Use Website Caching
  * Prefetch, Preload, Preconnect, and Prerender Techniques
    * Preload - current page
    * Prefetch - future use
    * Preconnect - 
    * Prerender - 
    ```html
    <link rel="preload" as="script" href="script.js">
    <link rel="preload" as="style" href="style.css">

    <link rel="prefetch" as="image" href="logo.png">

    <link rel="dns-prefetch" href="//sematext.com">
    <link rel="preconnect" href="https://www.sematext.com">
    <link rel="prerender" href="https://www.sematext.com/next-page">
    ```

------------------------------------------------------------

12. Call Stack
13. Event Loop
14. Microtask and Callback Queue
15. Async and Defer
16. Let, Const and Var 
17. Hoisting
18. Closure
19. Polyfill of map, reduce and filter
20. Pure functions
21. this keyword
22. Call, Bind and Apply
23. Arrow Functions
24. Prototypical Inheritance
25. Call back / Promise / Async Await
26. Debounce / Throttle
27. Errore (Reference / Syntax / Type)
28. Design Patterns
29. Local / Session storage / Cookeis