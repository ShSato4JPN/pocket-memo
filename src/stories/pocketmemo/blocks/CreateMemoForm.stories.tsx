import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CreateMemoForm from '../../../views/components/blocks/CreateMemoForm'

export default {
  title: 'blocks/CreateMemoForm',
  component: CreateMemoForm,
} as ComponentMeta<typeof CreateMemoForm>

const Template: ComponentStory<typeof CreateMemoForm> = (args) => {
  return (
    <>
      <CreateMemoForm />
    </>
  )
}

export const normal = Template.bind({})
