import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import CustomTextField from '../../src/sample/CustomTextField'

export default {
  title: 'Sample/CustomTextField',
  component: CustomTextField,
} as ComponentMeta<typeof CustomTextField>

const Template: ComponentStory<typeof CustomTextField> = (
  args
) => <CustomTextField />

export const primary = Template.bind({})
