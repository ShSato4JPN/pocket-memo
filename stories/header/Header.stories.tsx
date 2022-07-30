import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Header from '../../src/components/header/Header'

export default {
  title: 'Header/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <Header />
)

export const primary = Template.bind({})
