import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import MaterialBreakPoint from '../../src/sample/MaterialBreakPoint'

export default {
  title: 'Sample/MaterialBreakPoint',
  component: MaterialBreakPoint,
} as ComponentMeta<typeof MaterialBreakPoint>

const Template: ComponentStory<
  typeof MaterialBreakPoint
> = (args) => <MaterialBreakPoint />

export const primary = Template.bind({})
