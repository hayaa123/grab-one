import React, { Component } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import ButtomFooter from './ButtomFooter'
import MobileNav from './MobileNav'
export class HomePage extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Content/>
      <Footer/>
      <ButtomFooter/>
      <MobileNav/>
      </div>
      
    )
  }
}

export default HomePage