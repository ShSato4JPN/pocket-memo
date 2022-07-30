import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Message from '../../src/components/header/Message'

export default {
  title: 'Header/Message',
  component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => (
  <Message />
)

export const primary = Template.bind({})
