import resList from "../../utilis/mockdata";
import Res_card from "./Res_card";
import React, { useEffect, useState } from 'react';
import ShimmerUI from "./ShimmerUI";




const Body=()=>{
    const[List,setList]=useState([])
    const[searchtxt,setSearchtxt]=useState("")
    const[filteredRes,setFilteredRes]= useState([])
    useEffect(()=>{
        fetchData()
    }
    
    ,[])

    const fetchData =async()=>{
        const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json()
        console.log(json)
        console.log(json.data.cards[0].card.card);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    
    // condtional rendering
    return (List.length === 0)?<ShimmerUI/>:(
    <div className="body">
       
        <div className="search_bar">
            <input type="text"
             value={searchtxt} 
             onChange={(e)=>{
             setSearchtxt(e.target.value)
             }}
             >
            
            </input>
            <button onClick={()=>{console.log(searchtxt)

             const fl=List.filter(
             (res)=>(res.info.name.toLowerCase().includes(searchtxt)) )
             setFilteredRes(fl)
            
            }
            
            }>SEARCH</button>
           
           
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
        <div className="card_block">

        {
            // resList.map((restaurants)=><Res_card key={restaurants.info.id} resData={restaurants}></Res_card>)
            filteredRes.map((res)=><Res_card key={res.info.id} resData={res}></Res_card>)
        }
        </div> 
       
       
        </div>
       </div>

    </div>
)
}
export default Body
