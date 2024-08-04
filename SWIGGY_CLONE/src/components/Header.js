import { LOGO_URL } from "../../utilis/constants";

const Header=()=>{
    return(
    <div className="navbar">
        <div id="logo_container">
        <img className="logo" src={LOGO_URL}></img>
        </div>
        <div id="navi_tems">
           <ul>Home</ul>
           <ul>About Us</ul>
           <ul>cart</ul>
           <ul>Contact us</ul>
        </div>
       

    </div>
    )

}

export default Header












   