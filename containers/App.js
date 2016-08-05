import React, { Component } from 'react'
import Nav from '../components/nav'
import styles from './style.css'

export default class App extends Component {
  
  render() {
    //console.log("The App compoent is creaded")
    return (
      <div>
      	<div>
      		 <Nav />
      	</div>
        { this.props.children }
      </div>
    )
  }
}
