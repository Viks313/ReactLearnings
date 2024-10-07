import React from "react";
import ReactDOM from "react-dom";
// const heading=React.createElement("h1",{id:"heading"},"Hello world from react");

const heading = <h1 id="heading">Hello Everyone, Today we are learning about foundations of React</h1>;
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



