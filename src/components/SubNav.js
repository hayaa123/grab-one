import React, { Component } from 'react'
import {ChevronDownIcon,SearchIcon } from '@heroicons/react/outline'

export class SubNav extends Component {
  controlNavbar =()=>{
let subnav = document.querySelector(".subnav")
    if (window.scrollY >40){    
      
      subnav.classList.add ("subnav_mobile") 
       
    }
    else if (window.scrollY <40){
      subnav.classList.remove("subnav_mobile")
      
    }
  }
  componentDidMount(){
    window.addEventListener("scroll",this.controlNavbar)
  }
  render() {
    
    return (
      <div className='bg-white subnav w-full z-50' style={style.strong_box_shadow}>
      <div className='flex items-center  justify-between   h-16 max-w-screen-xl m-auto hide_when_responsive ' >
          <div className='flex justify-between w-2/5' >
              {/* this is for the nav list */}
            <div className='flex'>
                Browse Categories
                <ChevronDownIcon className='h-5 w-5 text-sky_blue' />
            </div>
            <div>
                What's New
            </div>
            <div>
                Trending
            </div>
            <div>
                For You
            </div>
            <div>
                Shop Products
            </div>
            
            

          </div>
          <div className='relative h-10 ' style={{width:"37%"}}>
              {/* the searsh part */}

                <SearchIcon className='h-8 w-8  z-10 text-[#4f5864] absolute top-1 left-2'/>
               <input type="text" placeholder='Search Grab One' className='absolute top-0 left-0 pl-10 pt-2 pb-2 border-solid border-[1px]  border-[#dce3ed] rounded-md w-[85%] h-[45px]' style={style.box_shadow}/>


          </div>
      </div>
      </div>

    )
  }
}
let style = {
  "box_shadow":{
      boxShadow:"0 0 8px 0 rgb(79 88 100 / 10%)"
  },
  "strong_box_shadow":{
    boxShadow:"0 0 10px 0 rgb(75 84 96 / 22%)"
  }
}

export default SubNav