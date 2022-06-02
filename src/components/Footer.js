import React, { Component } from "react";
import SocailMedia from "./SocailMedia";
import { DeviceMobileIcon , MailIcon } from "@heroicons/react/outline";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-evenly bg-white mt-5 footer_flex">
          <div className="h-[175px] flex flex-col justify-between font-semibold order_two footer_items">
            <p className="pt-6 ">Follow us on</p>
            <SocailMedia/>
            <div>
                <p className="mb-5">Get app exclusive deals</p>
                <div className="relative text-white ">
                  <button className="absolute  pl-6 w-[175px] bg-sky_blue h-12 rounded-md" style={style.box_shadow_blue}>
                    Download our App
                  </button>
                  <DeviceMobileIcon className="absolute h-7 w-7 top-[9px] left-[4px]" />
                </div>
            </div>
            
          </div>

          <div className="order_three footer_items">
            <p className="pt-6 pb-6 font-semibold">GrabOne</p>
            <ul>
              <li className=" pb-[6px]">Contact Us</li>
              <li className="pt-[6px] pb-[6px]">About Us</li>
              <li className="pt-[6px] pb-[6px]">Terms & Returns</li>
              <li className="pt-[6px] pb-[6px]">Blog</li>
              <li className="pt-[6px] pb-[6px]1">Gift Cards</li>
            </ul>
          </div>


          <div className="order_four footer_items">
            <p className="pt-6 pb-6 font-semibold">My Account</p>
            <ul>
              <li className="pb-[6px]">My Account</li>
              <li className="pt-[6px] pb-[6px]">My Cart</li>
              <li className="pt-[6px] pb-[6px]">My Coupons</li>
              <li className="pt-[6px] pb-[6px]">FAQ</li>
            </ul>
          </div>
          


          <div className="order_five footer_items">
            <p className="pt-6 pb-6 font-semibold">Merchants</p>
            <ul>
              <li className=" pb-[6px]">Run a Deal</li>
              <li className="pt-[6px] pb-[6px]">Merchant Centre</li>
            </ul>
          </div>

          <div className="w-[400px] order_one">
            <p className="pt-6 pb-6 font-semibold">Newsletter Signup</p>
            <p className="text-sm w-[370px]">Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
            <div className='relative w-[100%] h-[100px]  ' >
                <input type="text" placeholder='Enter email address' className=' absolute top-[27.5px] left-0 pl-10 pt-2 pb-2 border-solid border-[1px]  border-[#dce3ed] rounded-md w-[90%] h-[45px]' style={style.box_shadow} />
                <MailIcon className='h-8 w-8 text-[#92a2ad] absolute top-[34.5px] left-2'/>
                <button className='bg-sky_blue pl-[5%] pr-[5%] text-white text-[15px] absolute top-[27.5px] right-0 h-[45px] rounded-tr-lg rounded-br-lg' style={style.box_shadow_blue}> Subscribe </button>

              </div>

          </div>


        </div>
      </div>
    );
  }
}
let style = {
  "box_shadow":{
      boxShadow:"0 0 8px 0 rgb(79 88 100 / 10%)"
  },
  "box_shadow_blue":{
      boxShadow:"0 0 8px 0 rgb(1 178 238 / 50%)"
  }
}
export default Footer;
