import React, { Component } from 'react'
import { ShoppingCartIcon,UserIcon,SearchIcon,ViewGridIcon,HomeIcon } from '@heroicons/react/outline'

export class MobileNav extends Component {
  render() {
    return (
      <div className='hidden z-[90] text-[12px]  h-[60px]  mobile_nav '>
          <div className='text-center '>
            <HomeIcon className='h-7 w-7 m-auto'/>
            <span>Home</span>
          </div>
          <div className='text-center'>
            <SearchIcon className='h-7 w-7 m-auto'/>
            <span>Search</span>
          </div>
          <div className=''>
            <ViewGridIcon className='h-7 w-7 m-auto'/>
            <span>Categories</span>
          </div>
          <div>
            <ShoppingCartIcon className='h-7 w-7 m-auto'/>
            <span>Cart</span>
          </div>
          <div>
            <UserIcon className='h-7 w-7 m-auto'/>
            <span>Account</span>
          </div>
      </div>
    )
  }
}

export default MobileNav