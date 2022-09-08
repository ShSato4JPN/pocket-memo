import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import LoginForm from '../blocks/LoginForm'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
interface State {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const LoginModal: React.FC<State> = (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      fullScreen={matches}
      open={props.open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <DialogContent>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClose}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal