import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

interface State {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
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
      <DialogTitle id='create-memo-dialog'>
        {'メモを作成しますか？'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          メモが第三者に盗聴されたとしても本サイトは責任を取る事ができません。
          <br />
          同意いただける方のみ本サービスをご利用ください。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>いいえ</Button>
        <Button onClick={handleClose} autoFocus>
          はい
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginModal
