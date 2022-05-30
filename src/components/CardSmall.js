import React, { Component } from 'react'
import img from "../media/pexels-buildig.jpg"

export class CardSmall extends Component {
  render() {
    return (
      
        <div className='relative w-[100%]  '>
        <div className='bg-white rounded  w-[95%] sky_blue_hover_small '>
            <div className='relative ' >
              
              <img src={img} className="rounded object-cover " alt="" />
              <div className='bg-white w-6 h-6 rounded-full absolute top-2 right-2 flex items-center justify-center opacity-80	z-10 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" >
                  <path d="M0 0h22v22H0z" fill="none"/>
                  <path d="M17.3 12.842v2.684H20v1.789h-2.7V20h-1.8v-2.684h-2.7v-1.79h2.7v-2.684zm1.119-8.27a5.345 5.345 0 01.212 7.368l-1.278-1.269a3.549 3.549 0 00-.209-4.835A3.616 3.616 0 0012.2 5.7L11 6.771 9.8 5.7a3.614 3.614 0 00-4.945.138 3.563 3.563 0 00-.173 4.877l7.589 7.557L11 19.539l-7.632-7.6a5.347 5.347 0 01.212-7.367 5.424 5.424 0 017.42-.2 5.421 5.421 0 017.418.2z" fill="#1f2530"/>
                  <path transform="translate(0,22)" d="M0 0h22v22H0z" fill="none"/>
              </svg>   
              </div>
              <p className='sky_blue_hover_p'>
                Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa & Fitness Centre, Parking & Late Checkout - Options to Stay in the...
              </p>
            </div>
            
            <div className='pl-3 pt-3 h-[155px]'>
            <h1 className='text-base text-[#4f5864]'>Luxury 5-Star Auckland Stay at .. </h1>
              <p className='text-[#01b2ee] text-sm'>Cordis</p>
              <p className='text-[#92a2ad] text-sm'>Auckland</p>
              <span className='text-sky_blue ml-[89%] text-xs'>from</span> 
              <div className='flex justify-between items-end '>
                 <span className='text-[#92a2ad]'>370 bought</span> 
                 <div className='mr-4'><span className='line-through text-[#727986] text-xs'>$580</span><span className='text-sky_blue text-4xl'> $279</span></div>
              </div>
            </div>
        </div>
        </div>
    )
  }
}

export default CardSmall