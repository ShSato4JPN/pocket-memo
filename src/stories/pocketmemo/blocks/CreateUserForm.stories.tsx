import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CreateUserForm from '../../../views/components/blocks/CreateUserForm'

export default {
  title: 'blocks/CreateUserForm',
  component: CreateUserForm,
} as ComponentMeta<typeof CreateUserForm>

const Template: ComponentStory<typeof CreateUserForm> = (args) => {
  return (
    <>
      <CreateUserForm />
    </>
  )
}

export const normal = Template.bind({})
