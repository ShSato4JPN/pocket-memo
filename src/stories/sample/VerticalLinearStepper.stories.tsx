import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import VerticalLinearStepper from '../../views/components/samples/VerticalLinearStepper'

export default {
  title: 'sample/VerticalLinearStepper',
  component: VerticalLinearStepper,
} as ComponentMeta<typeof VerticalLinearStepper>

const Template: ComponentStory<typeof VerticalLinearStepper> = (
  args
) => {
  return <VerticalLinearStepper />
}

export const normal = Template.bind({})
