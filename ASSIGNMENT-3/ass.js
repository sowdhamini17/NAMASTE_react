import React from "react";
import ReactDOM from "react-dom/client";


const header = React.createElement("div",{className:"title"},
     [
        React.createElement("h1",{id:"1"},"THE SAGE WAY"),
        React.createElement("h2",{},"for newage yogi's"),
        React.createElement("h3",{},"truth")
     ]

)

const jsxrender = <div className="title">
        <h1>THE SAGE WAY</h1>
        <h2>for newage yogi's</h2>
        <h3>truth</h3>
        </div>

const Func = () =>(
        <div className="title">
        <h1>THE SAGE WAY</h1>
        <h2>for newage yogi's</h2>
        <h3>truth</h3>
        </div>
    )


const Funct1 = () =>{
    <div className="headerComponent">
    <div className="navbar">
        {/* <img src="https://dribbble.com/shots/24416760-Ocelot-Logo"></img> */}
         restart 
    </div>
    <Func/>
    </div>

}

     
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<Func/>);