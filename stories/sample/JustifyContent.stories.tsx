import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import JustifyContent from '../../src/sample/JustifyContent'

export default {
  title: 'Sample/JustifyContent',
  component: JustifyContent,
} as ComponentMeta<typeof JustifyContent>

const Template: ComponentStory<typeof JustifyContent> = (
  args
) => <JustifyContent />

export const primary = Template.bind({})
