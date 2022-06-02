import React, { Component } from 'react'
import CardSmall from './CardSmall'
import HeadlineWithButton from './HeadlineWithButton'

export class Deals extends Component {
  render() {
    return (
      <div className=' m-auto card_section'>
        <HeadlineWithButton title="Featured Auckland deals "/>
          
            <div className='flex flex-wrap w-full justify-between gap-y-3  change_flex_on_mobile'>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
            </div>
      </div>
    )
  }
}

export default Deals