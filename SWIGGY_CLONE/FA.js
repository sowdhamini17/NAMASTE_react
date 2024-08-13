import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body"
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";

const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    }
])
document.addEventListener("DOMContentLoaded", () => {
    const Root = ReactDOM.createRoot(document.getElementById("root"));
    Root.render(<RouterProvider router={appRouter}/>);
  });
