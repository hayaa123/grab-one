import React, { Component } from 'react'
import CardSmall from './CardSmall'
import HeadlineWithButton from './HeadlineWithButton'

export class Escapes extends Component {
  render() {
    return (
        <div className='w-[90%] m-auto h-[500px]'>
        <HeadlineWithButton title="Activities, Events & Outdoors"/>
        <div className='flex flex-wrap gap-y-3'>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
                <CardSmall/>
            </div>
        </div>
    )
  }
}

export default Escapes