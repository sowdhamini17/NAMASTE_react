import resList from "../../utilis/mockdata";
import Res_card from "./Res_card";
import React, { useEffect, useState } from 'react';





const Body=()=>{
    const[List,setList]=useState([])
    useEffect(()=>{
        fetchData()
    }
    
    ,[])

    const fetchData =async()=>{
        const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json()
        console.log(json)
        console.log(json.data.cards[0].card.card);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        )
  

    }
    if(List === 0){
        return(<h1>loading</h1>)
    }
    return(
    <div className="body">
       
        <div className="search_bar">SEARCH
            <button className="filter"
            //  onClick={()=>{resList = resList.filter((restaurants)=>restaurants.info.avgRating>4)}}
            onClick={()=>{
                const filter=
                List.filter(
                    (res)=>(res.info.avgRating) > 4)
                console.log(List)
                setList(filter)
                }
                
                }
            >
                TOP RATED Restaurants
            </button>
            <h3>What's on your mind?</h3>
        </div>
        <br/>
       <div >
        Pizza
        <br/>
        Cheesilicious pizzas to make every day extraordinary.
        <br/>
        <br/>
        Restaurants to explore
        <br/>
        <br/>
        <div className="Res_container">
        {/* <Res_card resData={res_obj[0]}/>
        <Res_card resData={res_obj[1]}/>
        <Res_card resData={res_obj[2]}/>
        <Res_card resData={res_obj[3]}/> */}
        {
            // resList.map((restaurants)=><Res_card key={restaurants.info.id} resData={restaurants}></Res_card>)
            List.map((res)=><Res_card key={res.info.id} resData={res}></Res_card>)
        }
        
       
       
        </div>
       </div>

    </div>
)
}
export default Body
