import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )

} 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); // This is how we render React Component
