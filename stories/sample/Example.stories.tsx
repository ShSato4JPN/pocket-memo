import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import Example from '../../src/sample/Example'

export default {
  title: 'Sample/Example',
  component: Example,
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (args) => (
  <Example />
)

export const primary = Template.bind({})
