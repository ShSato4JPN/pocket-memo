import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CustomizedInputs from '../../../src/views/components/samples/CustomizedInputs'

export default {
  title: 'sample/CustomizedInputs',
  component: CustomizedInputs,
} as ComponentMeta<typeof CustomizedInputs>

const Template: ComponentStory<typeof CustomizedInputs> = (args) => {
  const [userId, setUserId] = React.useState<string>('')

  return (
    <>
      <p>userId : {userId}</p>
      <CustomizedInputs />
    </>
  )
}

export const normal = Template.bind({})
