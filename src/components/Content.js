import React, { Component } from 'react'
import Card from './Card'
import Collections from './Collections'
import Deals from './Deals'
import Email from './Email'
import Escapes from './Escapes'
import Introduction from './Introduction'
import ListOfObjects from './ListOfObjects'

export class Content extends Component {
  render() {
    return (
      <div className='max-w-screen-xl m-auto'>
          <Introduction/>
          <div className='flex justify-between gap-5  m-auto'>
          <ListOfObjects/>
            <div className=' flex flex-wrap  justify-between  w-[79%] mr-[1%]  card_section'>
            <Card/>
            <Card/>
            </div>
          </div>
         <Email/>
         <Deals/>
         <Collections/>
         <Escapes/>
    
      </div>     
    )
  }
}

export default Content