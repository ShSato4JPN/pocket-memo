import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginUserIdField from '../../../views/components/atoms/LoginUserIdField'

export default {
  title: 'atoms/LoginUserIdField',
  component: LoginUserIdField,
} as ComponentMeta<typeof LoginUserIdField>

const Template: ComponentStory<typeof LoginUserIdField> = (args) => {
  const [userId, setUserId] = React.useState<string>('')

  return (
    <>
      <p>userId : {userId}</p>
      <LoginUserIdField setUserId={setUserId} />
    </>
  )
}

export const normal = Template.bind({})
