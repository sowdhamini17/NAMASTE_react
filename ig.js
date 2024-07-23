import React from "react";
import ReactDOM from "react-dom/client";

const block = React.createElement(
    "div",
    {id:"parent"},
    [
    React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1", {},"i am a h1 tag"),React.createElement("h2", {},"i am a h2 tag")]
),
   React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1", {},"i am a h1 tag"),React.createElement("h2", {},"i am a h2 tag")]
)
]);

// const heading = React.createElement("h1",{id:"head"},"hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(block);
