import { CARDIMG_URL } from "../../utilis/constants";

const Res_card=(props)=>{
    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines

    }=resData?.info;
    return(
        <div className="Res_block">
        <div className="Res_card">
            <img className="res_name" src={CARDIMG_URL+
                cloudinaryImageId}></img>
            <h5 className="name">{name}</h5>
            <h6 className="rating">{avgRating}</h6>
            <h6 className="cusine">{cuisines.join(",")} </h6>
            {/* <h6 className="time_taken">{resData.info.time_taken}</h6> */}

        </div>
        
    </div>
    )
}
export default Res_card