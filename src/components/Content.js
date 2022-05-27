import React, { Component } from 'react'
import Introduction from './Introduction'
import ListOfObjects from './ListOfObjects'

export class Content extends Component {
  render() {
    return (
      <div className='bg-gray '>
          <Introduction/>
          <ListOfObjects/>
      </div>      
    )
  }
}

export default Content