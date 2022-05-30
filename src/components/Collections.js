import React, { Component } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import CollectionsCard from './CollectionsCard'

export class Collections extends Component {
  render() {
    return (
        <div className='w-[90%] m-auto '>
        <div className='flex h-[75px] items-center'>
          <h1 className='text-[#4f5864] text-[32px]  inline '>Collections</h1>
          <span className='relative w-32 h-[75px] ml-[2%]'>
            <button className='bg-sky_blue inline top-[20px] text-white rounded-md absolute w-32  left-0 h-[35px]'>View More</button>
            <ChevronRightIcon className='w-4 h-4 text-white absolute top-[30.5px] right-2'/>
          </span>
        </div>
        <div className='grid grid-cols-4 gap-y-6'>
                <CollectionsCard/>
                <CollectionsCard/>
                <CollectionsCard/>
                <CollectionsCard/>

            </div>
        </div>
    )
  }
}

export default Collections