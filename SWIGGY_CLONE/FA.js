import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body"
import Footer from "./src/components/Footer";


const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
document.addEventListener("DOMContentLoaded", () => {
    const Root = ReactDOM.createRoot(document.getElementById("root"));
    Root.render(<Applayout />);
  });
