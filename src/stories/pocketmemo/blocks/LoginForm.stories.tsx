import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from '../../../views/components/blocks/LoginForm'

export default {
  title: 'blocks/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export const normal = Template.bind({})
