import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import Icon from '../../components/Icon/Icon'

export class StartPage extends Component {
  render () {
    return (
      <div style={{height: window.innerHeight + 'px'}} styleName="wrap">
        <p>graariel.com</p>
      </div>
    )
  }
}

export default CSSModules(StartPage, styles)
