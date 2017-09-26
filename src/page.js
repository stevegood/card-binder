'use strict'

import React, { PureComponent } from 'react'

const style = {
  page: {
    display: 'flex',
    flexFlow: 'row wrap',
    flex: 1
  }
}

class Page extends PureComponent {
  render() {
    return (
      <div style={style.page}>
        {this.props.children}
      </div>
    )
  }
}

export default Page