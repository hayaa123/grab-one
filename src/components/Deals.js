import React, { Component } from 'react'
import CardSmall from './CardSmall'
import HeadlineWithButton from './HeadlineWithButton'

export class Deals extends Component {
  render() {
    return (
      <div className='w-[90%] m-auto '>
        <HeadlineWithButton title="Featured Auckland deals "/>
          
            <div className='grid grid-cols-4 gap-y-6'>
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