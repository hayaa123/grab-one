import React, { Component } from 'react'
import Card from './Card'
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
         
      </div>      
    )
  }
}

export default Content