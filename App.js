import React from "react";
import ReactDOM from "react-dom/client";


//  React.createElement => ReactElement- Js Object => HTMLElement(render)

const  heading1 = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
console.log(heading1);

//JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX - HTML-like or XML-like syntax [JSX => Babel transpiles it to React.createElement => ReactElement- Js Object => HTMLElement(render)]

const jsxHeading = (<h1 id="heading">Namaste React using JSX</h1>) 

console.log(jsxHeading);

// React Element

const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

// const Title = function () { 
//     return (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// )
// };

// React Functional Component

const HeadingComponent = () =>  (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(jsxHeading);
root.render(<HeadingComponent/>); // This is how we render React Component

// const  parent = React.createElement("div", {id: "parent"},[
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1", {id: "heading_1"}, "Heading 1"), 
//         React.createElement("h2", {id: "heading_2"}, "Heading 2"),
//     ]),

//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {id: "heading_1"}, "Heading 1"), 
//         React.createElement("h2", {id: "heading_2"}, "Heading 2"),
//         React.createElement("h3", {id: "heading_3"}, "Heading 3")
//     ]),
// ]);


// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
