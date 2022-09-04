import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '@mui/material/Button'
import LoginModal from '../../../views/components/modules/LoginModal'

export default {
  title: 'modules/LoginModal',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [userId, setUserId] = React.useState<string>('')
  const [userPassword, setUserPassword] = React.useState<string>('')
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
      <Button onClick={handleClick}>show dialog</Button>
      <LoginModal
        open={open}
        setOpen={setOpen}
        setUserId={setUserId}
        setUserPassword={setUserPassword}
      />
    </>
  )
}

export const normal = Template.bind({})
