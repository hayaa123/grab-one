import React, { Component } from 'react'
import image from "../media/OLygwiumDq.png"

export class Introduction extends Component {
  render() {
    return (
      <div >
        <img src={image} alt="" className='m-auto block cover w-[90%] pt-10' />
        <p className='text-center p-8 font-medium'>For savings on big brands you love, <a href="/" className='text-sky_blue '>register here.</a> </p>  
      </div>
    )
  }
}

export default Introduction