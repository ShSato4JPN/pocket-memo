import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginPasswordField from '../../../views/components/atoms/LoginPasswordField'

export default {
  title: 'atoms/LoginPasswordField',
  component: LoginPasswordField,
} as ComponentMeta<typeof LoginPasswordField>

const Template: ComponentStory<typeof LoginPasswordField> = (
  args
) => {
  const [password, setPassword] = React.useState<string>('')

  return (
    <>
      <p>userId : {password}</p>
      <LoginPasswordField setPassword={setPassword} />
    </>
  )
}

export const normal = Template.bind({})
