import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Checkout from '../../src/sample/chckout/Checkout'

export default {
  title: 'Sample/Checkout',
  component: Checkout,
} as ComponentMeta<typeof Checkout>

const Template: ComponentStory<typeof Checkout> = (
  args
) => <Checkout />

export const primary = Template.bind({})
