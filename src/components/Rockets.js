import React from "react";
import CardUl from "./CardUl";

const Card_Ul_info = [
    {
        image:"rocketman.png",
        title:"Explorer",
        price:"$",
        description:"Affordable exploration"
    },
    {
        image:"rocketride.png",
        title:"Adventure",
        price:"$$",
        description:"Best selling rockets!"
    },
    {
        image:"rocketlaunch.png",
        title:"Infinity",
        price:"$$$",
        description:"Luxury starships"
    }
]

const Rockets = () => {
  return (
    <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center justify-center gap-8">
        {Card_Ul_info.map((item,index)=>(
            <CardUl key={index} item={item} />
        ))}
    </ul>
  );
};

export default Rockets;
