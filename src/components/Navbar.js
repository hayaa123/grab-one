import React, { Component } from 'react'
import { LocationMarkerIcon ,ChevronDownIcon,HeartIcon,ShoppingCartIcon,UserIcon,MailIcon } from '@heroicons/react/outline'
import SubNav from './SubNav'
export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            country: "Auckland"
        }
    }
    countries = ["Auckland","Waikato","Wellington","Northland","Tauranga","Rotorua - Taupo","Hawkes Bay","Christchurch","Taranaki","Nelson - Marlborough","Queenstown - Wanaka","Dunedin - Invercargill"]
    dropDown = (e)=>{
        
    }
  render() {
    return (
    <>
      <div className="bg-sky_blue flex justify-between items-center h-16">
            <div style={{color:"white",fontSize:"35px",textDecoration:"bold",fontFamily:"'Fredoka One', cursive",marginLeft: "83px"}}>
                GrabOne
            </div>
          
            <div className="flex items-center w-2/5 justify-around">
                <div>
              <button className='flex items-center'>
                  <LocationMarkerIcon className={classes.small_icons}/>
                  <span className='text-white'>{this.state.country}</span>
                  <ChevronDownIcon className={classes.arrow}/>
              </button>
              </div>
              <div className='hide_when_responsive'>
                  <HeartIcon className={classes.small_icons}/>
              </div>
                <div className='hide_when_responsive'>
                <ShoppingCartIcon className={classes.small_icons}/>
                </div>
                <div className='flex items-center hide_when_responsive'>
                  <UserIcon className={classes.small_icons}/>
                  <ChevronDownIcon className={classes.arrow}/>
                </div>
                <div className='flex items-center justify-evenly w-32 hide_when_responsive'>
                <MailIcon className={classes.small_icons}/>
                <span className='text-white'>subscribe</span>
                </div>
            </div>
            
      </div>
      <div>
        <SubNav/>
      </div>
      </>
    )
  }
}

let classes = {
  "small_icons":"h-8 w-8 text-white ",
  "arrow":"h-5 w-5 text-white "
}

 
export default Navbar