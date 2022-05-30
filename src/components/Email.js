import React, { Component } from 'react'
import { MailIcon } from '@heroicons/react/outline'

export class Email extends Component {
  render() {
    return (
      <div className='bg-white  flex items-center change_flex_responsive  w-[90%] m-auto mt-10 '>
          <div className='text-[21px]	text-sky_blue font- bold pl-10 mail_text'>
          Get the best deals delivered direct to your inbox each day
          </div>
          <div className='flex justify-center items-center   w-[50%] mail' >
              <div className='relative w-[95%] h-[100px] ml-10 ' >
                <input type="text" placeholder='Enter email address' className=' absolute top-[27.5px] left-0 pl-10 pt-2 pb-2 border-solid border-[1px]  border-[#dce3ed] rounded-md w-[90%] h-[45px]' style={style.box_shadow} />
                <MailIcon className='h-8 w-8 text-[#92a2ad] absolute top-[34.5px] left-2'/>
                <button className='bg-sky_blue pl-[2%] pr-[2%] text-white text-[15px] absolute top-[27.5px] right-0 h-[45px] rounded-tr-lg rounded-br-lg' style={style.box_shadow}> Subscribe </button>

              </div>
          </div>
          
      </div>
    )
   
  }
  
}
  let style = {
        "box_shadow":{
            boxShadow:"0 0 8px 0 rgb(79 88 100 / 10%)"
        }
    }
export default Email