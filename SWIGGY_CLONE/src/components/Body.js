import resList from "../../utilis/mockdata";
import Res_card from "./Res_card";
import React, { useState } from 'react';


// let listRes = [
//     {
//         "info": {
//             "id": "67645",
//             "name": "Night Lion by Madhampatty Pakashala",
//             "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
//             "locality": "Gauthama Puri Nagar",
//             "areaName": "Peelamedu",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "South Indian",
//                 "Chinese",
//                 "Haleem"
//             ],
//             "avgRating": 3.4,
//             "parentId": "377170",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 27,
//                 "lastMileTravel": 4.1,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "4.1 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-07-29 03:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹75"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-coimbatore-67645",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "440139",
//             "name": "Great Indian Khichdi by EatFit",
//             "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
//             "locality": "Thanneerpandal main Road",
//             "areaName": "Peelamedu",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Home Food",
//                 "Indian",
//                 "North Indian",
//                 "Healthy Food",
//                 "Snacks",
//                 "Desserts",
//                 "Rajasthani",
//                 "South Indian",
//                 "Maharashtrian",
//                 "Sweets"
//             ],
//             "avgRating": 4.3,
//             "parentId": "319582",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "500+",
//             "sla": {
//                 "deliveryTime": 26,
//                 "lastMileTravel": 4.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "4.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-07-29 00:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹149"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//                 "aggregatedRating": {
//                     "rating": "--"
//                 }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-thanneerpandal-main-road-peelamedu-coimbatore-440139",
//             "type": "WEBLINK"
//         }
//     },
// ]

const [listRes] = useState([
    
    { 
        "info": {
            "id": "67645",
            "name": "Night Lion by Madhampatty Pakashala",
            "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
            "locality": "Gauthama Puri Nagar",
            "areaName": "Peelamedu",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Haleem"
            ],
            "avgRating": 3.4,
            "parentId": "377170",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-29 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-coimbatore-67645",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "440139",
            "name": "Great Indian Khichdi by EatFit",
            "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
            "locality": "Thanneerpandal main Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Healthy Food",
                "Snacks",
                "Desserts",
                "Rajasthani",
                "South Indian",
                "Maharashtrian",
                "Sweets"
            ],
            "avgRating": 4.3,
            "parentId": "319582",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-29 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-thanneerpandal-main-road-peelamedu-coimbatore-440139",
            "type": "WEBLINK"
        }
    },
]

  
);

const Body=()=>{
    return(
    <div className="body">
       
        <div className="search_bar">SEARCH
            <button className="filter"
             onClick={()=>{listRes = listRes.filter((restaurants)=>restaurants.info.avgRating>4)}}
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
            listRes.map((restaurants)=><Res_card key={restaurants.info.id} resData={restaurants}></Res_card>)
        }
        
       
       
        </div>
       </div>

    </div>
)
}
export default Body