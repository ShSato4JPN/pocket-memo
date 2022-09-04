import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LoginForm from '../blocks/LoginForm'

interface State {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setUserId: React.Dispatch<React.SetStateAction<string>>
  setUserPassword: React.Dispatch<React.SetStateAction<string>>
}

const LoginModal: React.FC<State> = (props) => {
  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
