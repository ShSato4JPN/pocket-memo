import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import ThemeNesting from '../../src/sample/ThemeNesting'

export default {
  title: 'Sample/ThemeNesting',
  component: ThemeNesting,
} as ComponentMeta<typeof ThemeNesting>

const Template: ComponentStory<typeof ThemeNesting> = (
  args
) => <ThemeNesting />

export const primary = Template.bind({})
