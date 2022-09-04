import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginUserIdForm from '../../../views/components/blocks/LoginUserIdForm'

export default {
  title: 'modules/LoginUserIdForm',
  component: LoginUserIdForm,
} as ComponentMeta<typeof LoginUserIdForm>

const Template: ComponentStory<typeof LoginUserIdForm> = (args) => (
  <LoginUserIdForm />
)

export const normal = Template.bind({})
