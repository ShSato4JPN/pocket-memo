import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RegisterUserIdField from '../../../views/components/atoms/RegisterUserIdField'

export default {
  title: 'atoms/RegisterUserIdField',
  component: RegisterUserIdField,
} as ComponentMeta<typeof RegisterUserIdField>

const Template: ComponentStory<typeof RegisterUserIdField> = (
  args
) => {
  const [userId, setUserId] = React.useState<string>('')

  return (
    <>
      <p>userId : {userId}</p>
      <RegisterUserIdField
        setUserId={setUserId}
        label={'ユーザーID'}
        max={20}
        min={8}
      />
    </>
  )
}

export const normal = Template.bind({})
