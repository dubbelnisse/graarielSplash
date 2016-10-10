import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import Icon from '../../components/Icon/Icon'

export class StartPage extends Component {
  render () {
    return (
      <div style={{height: window.innerHeight + 'px'}} styleName="wrap">
        <div styleName="info">
          <div>
            <img src="static/images/logo.jpg" styleName="logo" />
          </div>
          <div>
            <p>E-mail: sven.carlsson@graariel.com</p>
            <p>Tel: +46 708-53 24 32</p>
            <p>In progress</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(StartPage, styles)
