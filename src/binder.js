'use strict'

import React, { PureComponent } from 'react'
import Card from './card'
import Page from './page'

class Binder extends PureComponent {
  render() {
    return (
      <div className='binder'>
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