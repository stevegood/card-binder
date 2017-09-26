'use strict'

import React, { PureComponent } from 'react'

const style = {
  card: {
    margin: 6,
    flexBasis: '0 1 calc(25% - 12px)'
  }
}

class Card extends PureComponent {
  render() {
    return (
      <div style={style.card}>
        {this.props.children}
      </div>
    )
  }
}

export default Card