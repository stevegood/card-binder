import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import Binder, { Card, Page } from '../'

{
  storiesOf('Binder Pages', module)
    .add('Single Standard Card Page', () => {
      let cards = []
      
      for (let i=0; i < 11; i++) {
        cards.push((
          <Card key={i}>
            <img src="https://github.com/guidokessels/xwing-data/raw/master/images/pilots/Rebel%20Alliance/X-wing/luke-skywalker.png" />
          </Card>
        ))
      }
      
      return (
        <Binder>
          <Page>
            {cards}
          </Page>
        </Binder>
      )
    })
    .add('Side-by-side Standard Card Page', () => {
      let cards = []
      
      for (let i=0; i < 11; i++) {
        cards.push((
          <Card key={i}>
            <img src="https://github.com/guidokessels/xwing-data/raw/master/images/pilots/Rebel%20Alliance/X-wing/luke-skywalker.png" />
          </Card>
        ))
      }
      
      return (
        <Binder>
          <Page>
            {cards}
          </Page>
          
          <Page>
            {cards}
          </Page>
        </Binder>
      )
    })
}