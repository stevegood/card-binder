'use strict'

import React, { PureComponent } from 'react'

class Page extends PureComponent {
  render() {
    return (
      <div className='page'>
        {this.props.children}
      </div>
    )
  }
}

export default Page