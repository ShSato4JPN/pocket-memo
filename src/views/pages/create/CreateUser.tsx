import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import UserIdField from '../utils/UserIdField'
import PasswordField from '../utils/PasswordField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function CreateUser() {
  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid
      container
      spacing={4}
      sx={{
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12}>
        <Box textAlign='right'>
          <Link
            href='/'
            component='a'
            underline='hover'
            variant='subtitle2'
          >
            既にユーザを作成されている方
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Typography variant='h6' gutterBottom>
            ユーザ名 *
          </Typography>
          <UserIdField
            id={'custom-input-form'}
            text={userId}
            setText={setUserId}
            label={'ユーザーID'}
            min={8}
            max={15}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Typography variant='h6' gutterBottom>
            パスワード *
          </Typography>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <PasswordField
            id={'custom-input-form'}
            text={password}
            setText={setPassword}
            label={'パスワード'}
            min={8}
            max={20}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Typography variant='h6' gutterBottom>
            パスワード（確認用）
          </Typography>
          <PasswordField
            id={'custom-input-form'}
            text={checkPassword}
            setText={setCheckPassword}
            label={'パスワード'}
            min={8}
            max={20}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Button
            variant='outlined'
            onClick={handleOpen}
            sx={{
              padding: 1,
              margin: 1.5,
              width: '30%',
            }}
          >
            登録内容をチェックする
          </Button>
        </Box>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='create-memo-dialog'>
          {'ユーザを作成しますか？'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            入力された内容でユーザの作成を行います。
            <br />
            よろしいでしょうか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={handleClose} autoFocus>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
