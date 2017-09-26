'use strict'

import React, { PureComponent } from 'react'
// import ReactDOM from 'react-dom'

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