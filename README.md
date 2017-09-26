# Card Binder

A set of React components used to create card binders.

## Demo

View the [storybook](https://www.stevegood.rocks/card-binder)

## Installation

To install this Component, run `yarn add card-binder` or `npm install card-binder`

## Usage

```javascript
import React from 'react'
import Binder, { Card, Page } from 'card-binder'

const MyBinder = props => (
  <Binder>
    <Page>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
      <Card standard>
        <h2>Standard Card</h2>
      </Card>
    </Page>
  </Binder>
)

export default MyBinder
```