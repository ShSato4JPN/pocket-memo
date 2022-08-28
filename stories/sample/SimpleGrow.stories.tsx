import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SimpleGrow from '../../src/sample/SimpleGrow'

export default {
  title: 'Sample/SimpleGrow',
  component: SimpleGrow,
} as ComponentMeta<typeof SimpleGrow>

const Template: ComponentStory<typeof SimpleGrow> = (args) => <SimpleGrow />

export const primary = Template.bind({})
