import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import ResponsiveGrid from '../../src/sample/ResponsiveGrid'

export default {
  title: 'Sample/ResponsiveGrid',
  component: ResponsiveGrid,
} as ComponentMeta<typeof ResponsiveGrid>

const Template: ComponentStory<typeof ResponsiveGrid> = (
  args
) => <ResponsiveGrid />

export const primary = Template.bind({})
