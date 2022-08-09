import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import CustomAppBar from '../../src/components/CustomAppBar'

export default {
  title: 'Sample/CustomAppBar',
  component: CustomAppBar,
} as ComponentMeta<typeof CustomAppBar>

const Template: ComponentStory<typeof CustomAppBar> = (
  args
) => <CustomAppBar />

export const primary = Template.bind({})
