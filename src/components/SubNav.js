import React, { Component } from 'react'
import {ChevronDownIcon,SearchIcon } from '@heroicons/react/outline'

export class SubNav extends Component {
  render() {
    return (
      <div className='flex items-center justify-between h-16'>
          <div className='flex justify-between w-2/5 ml-20'>
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
          <div className='relative h-10 border-slate-300' style={{width:"37%"}}>
              {/* the searsh part */}

                <SearchIcon className='h-8 w-8 absolute top-0 left-0 z-10'/>
               <input type="text" placeholder='Search Grab One' className='absolute top-0 left-0 h-10 w-10/12 pl-12'/>


          </div>
      </div>
    )
  }
}

export default SubNav