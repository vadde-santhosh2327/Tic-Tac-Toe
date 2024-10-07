
import React, { Component } from 'react'
import Tictac from './Components/Tictac'
import Facebook from './Components/Facebook'
import Weather from './Components/Weather'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Tictac/> */}
        {/* <Facebook/> */}
        <Weather/>
      </div>
    )
  }
}
