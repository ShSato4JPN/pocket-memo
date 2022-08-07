import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import SignIn from '../../src/sample/SignIn'

export default {
  title: 'Sample/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = (args) => (
  <SignIn />
)

export const primary = Template.bind({})
