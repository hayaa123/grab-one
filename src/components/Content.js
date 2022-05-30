import React, { Component } from 'react'
import Card from './Card'
import Collections from './Collections'
import Deals from './Deals'
import Email from './Email'
import Introduction from './Introduction'
import ListOfObjects from './ListOfObjects'

export class Content extends Component {
  render() {
    return (
      <div className='bg-gray '>
          <Introduction/>
          <div className='flex justify-between'>
          <ListOfObjects/>
            <div className='flex justify-between w-[1012px] mr-[90px]'>
            <Card/>
            <Card/>
            </div>
          </div>
         <Email/>
         <Deals/>
         <Collections/>
      </div>     
    )
  }
}

export default Content