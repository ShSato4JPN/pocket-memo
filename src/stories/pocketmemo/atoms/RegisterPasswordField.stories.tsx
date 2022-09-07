import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RegisterPasswordField from '../../../views/components/atoms/RegisterPasswordField'

export default {
  title: 'atoms/RegisterPasswordField',
  component: RegisterPasswordField,
} as ComponentMeta<typeof RegisterPasswordField>

const Template: ComponentStory<typeof RegisterPasswordField> = (
  args
) => {
  const [password, setPassword] = React.useState<string>('')

  return (
    <>
      <p>userId : {password}</p>
      <RegisterPasswordField
        setPassword={setPassword}
        label={'パスワード'}
        max={20}
        min={8}
      />
    </>
  )
}

export const normal = Template.bind({})
