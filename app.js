const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h2",{},"react using normal way"),React.createElement("h3",{},"react using normal way")]
    ),React.createElement("div",{id:"child2"},
        [React.createElement("h2",{},"react using normal way"),React.createElement("h3",{},"react using normal way")]
    )]
)
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



