'use strict'

import React, { PureComponent } from 'react'
import Card from './card'
import Page from './page'

const style = {
  binder: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
}

class Binder extends PureComponent {
  render() {
    return (
      <div style={style.binder}>
        {this.props.children}
      </div>
    )
  }
}

export default Binder

export {
  Card,
  Page
}