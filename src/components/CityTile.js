import { useState } from "react";
import './CityTile.css'
 
function CityTile({id, name,image,info,price, removetour}){
    console.log(removetour);
    const lessInfo = `${info.slice(0,200)}... `;
    const [showmore,setShowMore] = useState("show more");
    const [infor,setinfor] = useState(lessInfo);
    
    function showMoreHandler(){
        if(showmore == "show more"){
            setinfor(`${info}`);
            setShowMore(" show less");
        }
        else{
            setinfor(lessInfo);
            setShowMore("show more");
        }
    }
    return(
        <div className="citytile min-h-[520px] m-2 p-4 w-[290px] rounded flex flex-col justify-between h-fit">
            <img src={image} className="city-img h-[180px] aspect-square rounded"></img>
            <p className="city-price mt-2 text-green-900 font-extrabold text-lg">₹{price}</p>
            <h4 className="city-name mt-2 mb-1 font-extrabold text-xl">{name}</h4>
            <div><span className="city-deet">{infor}</span><span className="text-[blue] cursor-pointer" onClick={showMoreHandler}>{showmore}</span></div>
            <button className="button-28 mt-4" onClick={()=> removetour(id)}>Not Interested</button>
        </div>
    )
}

export default CityTile;