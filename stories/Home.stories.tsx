import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Home from '../pages/index'

export default {
  title: 'main/Home',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => (
  <Home />
)

export const primary = Template.bind({})
