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
      <div className=' '>
          <Introduction/>
          <div className='flex gap-5 w-[90%] m-auto'>
          <ListOfObjects/>
            <div className='flex gap-5 w-[60%] card_section'>
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