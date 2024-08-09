import { LOGO_URL } from "../../utilis/constants";
import React, { useState } from 'react';

const Header=()=>{
    const[btname,setBtname]=useState("LOGIN")
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
           {/* <button className="login_btn" 
           onClick={()=>{setBtname="LOGOUT"}}>
            {btname}
           </button> */}
           <button className="login_btn" onClick={() => setBtname('LOGOUT')}>
        {btname}
      </button>
        </div>
       

    </div>
    )

}

export default Header












   