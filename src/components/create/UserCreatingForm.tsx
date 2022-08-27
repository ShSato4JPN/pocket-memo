import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import UserIdField from '../utils/UserIdField'
import PasswordField from '../utils/PasswordField'

interface State {
  userName: string
  password: string
  checkPassword: string
  showPassword: boolean
  showCheckPassword: boolean
}

export default function UserCreatingForm() {
  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')

  const [values, setValues] = React.useState<State>({
    userName: '',
    password: '',
    checkPassword: '',
    showPassword: false,
    showCheckPassword: false,
  })

  const handleChange =
    (prop: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleClickCheckShowPassword = () => {
    setValues({
      ...values,
      showCheckPassword: !values.showCheckPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
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
            paddingLeft: 10,
            paddingRight: 10,
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
            paddingLeft: 10,
            paddingRight: 10,
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
            paddingLeft: 10,
            paddingRight: 10,
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
            sx={{
              padding: 1,
              margin: 1.5,
              width: '30%',
            }}
          >
            ユーザを作成する
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
