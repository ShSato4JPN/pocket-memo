import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CustomAppBar from '../../../views/components/modules/CustomAppBar'

export default {
  title: 'modules/CustomAppBar',
  component: CustomAppBar,
} as ComponentMeta<typeof CustomAppBar>

const Template: ComponentStory<typeof CustomAppBar> = (args) => (
  <CustomAppBar />
)

export const normal = Template.bind({})
