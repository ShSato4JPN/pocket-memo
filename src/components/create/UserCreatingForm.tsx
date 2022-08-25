import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import CustomInputField from '../../components/utils/CustomInputField'
import CustomPasswordField from '../../components/utils/CustomPasswordField'

interface State {
  userName: string
  password: string
  checkPassword: string
  showPassword: boolean
  showCheckPassword: boolean
}

export default function UserCreatingForm() {
  //　ユーザID
  const [userId, setUserId] = useState<string>('')
  // 本パスワード
  const [password, setPassword] = useState<string>('')
  // 確認用パスワード
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
          <CustomInputField
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
          <CustomPasswordField
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
          <CustomPasswordField
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
