import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import SampleBox from '../../src/sample/SampleBox'

export default {
  title: 'Sample/SampleBox',
  component: SampleBox,
} as ComponentMeta<typeof SampleBox>

const Template: ComponentStory<typeof SampleBox> = (
  args
) => <SampleBox />

export const primary = Template.bind({})
