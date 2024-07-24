import React from "react";
import ReactDOM from "react-dom"

// JSX => React.createElement => js object =>html element (babel)

// const jsxRender = (<div className="heading">
//     <h1>jsx begin</h1>
//     <h2>author me</h2></div>
// )

const Title= ()=>{
    return <h1>functional component</h1>
}

const Landing_page= ()=>(
    <div>
        <Title/>
        <h2>navbar starts</h2></div>
        
   
)
  

    

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Landing_page/> )