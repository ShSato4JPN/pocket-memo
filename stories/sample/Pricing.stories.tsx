import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Pricing from '../../src/sample/Pricing'

export default {
  title: 'Sample/Pricing',
  component: Pricing,
} as ComponentMeta<typeof Pricing>

const Template: ComponentStory<typeof Pricing> = (args) => (
  <Pricing />
)

export const primary = Template.bind({})
