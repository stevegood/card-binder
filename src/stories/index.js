import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import Binder, { Card, Page } from '../'

{
  storiesOf('Binder Pages', module)
    .add('Single Standard Card Page', () => (
      <Binder>
        <Page>
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
        </Page>
      </Binder>
    ))
    .add('Side-by-side Standard Card Page', () => (
      <Binder>
        <Page>
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
        </Page>
        
        <Page>
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
          
          <Card />
          <Card />
          <Card />
          <Card />
        </Page>
      </Binder>
    ))
}