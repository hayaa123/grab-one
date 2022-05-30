import React, { Component } from 'react'
import CollectionsCard from './CollectionsCard'
import HeadlineWithButton from './HeadlineWithButton'

export class Collections extends Component {
  render() {
    return (
        <div className='w-[90%] m-auto mb-[100px]'>
        <HeadlineWithButton title="Collections"/>
        <div className='flex flex-wrap gap-y-8'>
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