import React, { Component } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

export class HeadlineWithButton extends Component {
  render() {
    return (
        <div className='flex h-[75px] mt-[2%] mb-[2%] items-center'>
        <h1 className='responsive_h text-[#4f5864] text-[32px]  inline '>{this.props.title}</h1>
        <span className='responsive_b relative w-32 h-[75px]  ml-[2%]'>
          <button className='bg-sky_blue inline top-[20px] text-white rounded-md absolute w-32  left-0 h-[35px]'>View More</button>
          <ChevronRightIcon className='w-4 h-4 text-white absolute top-[30.5px] right-2'/>
        </span>
      </div>
    )
  }
}

export default HeadlineWithButton