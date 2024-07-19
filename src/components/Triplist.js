import { useState } from 'react';
import CityTile from './CityTile';

function Triplist(  {tours, removetour}){
    // console.log(cityy);
    // console.log(removetour);
    console.log(tours);
    // const tour = cityy.tours;
    return(
        <div>
            <h1 className="text-2xl border-dashed border-4 mt-4 border-sky-500 w-max px-8 py-2 rounded font-bold mx-auto">Plan With Shruti</h1>
            <div className="w-9/12 h-screen mx-auto flex flex-wrap justify-around mt-4">
            {
                tours.map((tour)=>{
                    return (
                        <CityTile key={tour.id} {...tour} removetour={removetour}></CityTile> //object ki copy pass kardi (element of array is a object)
                    )
                })
            }
            </div>
        </div>
    )
}

export default Triplist;