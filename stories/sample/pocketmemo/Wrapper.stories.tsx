import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Wrapper from '../../../src/sample/Wrapper'

export default {
  title: 'Utils/Wrapper',
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper />
)

export const normal = Template.bind({})
