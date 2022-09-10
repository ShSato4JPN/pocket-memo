import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PeriodSelector from '../../../views/components/atoms/PeriodSelector'

export default {
  title: 'atoms/PeriodSelector',
  component: PeriodSelector,
} as ComponentMeta<typeof PeriodSelector>

const Template: ComponentStory<typeof PeriodSelector> = (args) => {
  const [password, setPassword] = React.useState<string>('')

  return (
    <>
      <PeriodSelector />
    </>
  )
}

export const normal = Template.bind({})
