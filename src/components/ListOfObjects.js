import React, { Component } from "react";

export class ListOfObjects extends Component {
  discover =[
    {
        name:"Featured Auckland deals",
        number:294
    },{
        name:"Collections",
        number:44
    },{
        name:"Escapes",
        number:76
    },{
        name:"Picked for You",
        number:0
    },{
        name:"Store",
        number:4974
    },{
        name:"Restaurants, Bars, Cafes",
        number:19
    },{
        name:"Beauty, Massage & Spa",
        number:385
    },{
        name:"House & Garden",
        number:2440
    },{
        name:"Fitness & Sports",
        number:276
    },{
        name:"Automotive",
        number:166
    },
  ]
  render() {
    return (
      <div className=" bg-white w-[320px] rounded-sm ml-[70px]">
        <h1 className="text-sky_blue border-b-[1px] border-[#dce3ed] h-16 text-[30px] font-semibold ml-5 flex items-center " >Discover</h1>
        <ul className="flex flex-col justify-evenly "> 
            {
                this.discover.map(item=>{
                    if (item.number===0){
                        return(<li className="flex items-center h-[45px]"> <span className="ml-5">{item.name}</span> </li>)
                    }
                    return(<li className="flex justify-between border-b border-gray  items-center h-[45px]"> <span className="ml-5">{item.name}</span> <span  className="text-[#92a2ad] mr-5">{item.number}</span> </li>)
                })
            }
        </ul>
      </div>
    );
  }
}

export default ListOfObjects;
