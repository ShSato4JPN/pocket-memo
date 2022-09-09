import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '@mui/material/Button'
import CreateMemoModal from '../../../views/components/modules/CreateMemoModal'

export default {
  title: 'modules/CreateMemoModal',
  component: CreateMemoModal,
} as ComponentMeta<typeof CreateMemoModal>

const Template: ComponentStory<typeof CreateMemoModal> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
      <Button onClick={handleClick}>show dialog</Button>
      <CreateMemoModal open={open} setOpen={setOpen} />
    </>
  )
}

export const normal = Template.bind({})
