// const  heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const  parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "heading_1"}, "Heading 1"), 
        React.createElement("h2", {id: "heading_2"}, "Heading 2"),
    ]),

    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "heading_1"}, "Heading 1"), 
        React.createElement("h2", {id: "heading_2"}, "Heading 2"),
        React.createElement("h3", {id: "heading_3"}, "Heading 3")
    ]),
]);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
