import * as React from 'react'
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

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export default function UserCreatingForm() {
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
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
          <FormControl
            sx={{ width: '100%' }}
            variant='standard'
          >
            <InputLabel htmlFor='standard-adornment-password'>
              UserName
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type='text'
              value={values.password}
              onChange={handleChange('password')}
              sx={{
                fontFamily: 'monospace',
                fontSize: 20,
              }}
            />
          </FormControl>
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
          <FormControl
            sx={{ width: '100%' }}
            variant='standard'
          >
            <InputLabel htmlFor='standard-adornment-password'>
              Password
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type={
                values.showPassword ? 'text' : 'password'
              }
              value={values.password}
              onChange={handleChange('password')}
              sx={{
                fontFamily: 'monospace',
                fontSize: 20,
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
          <FormControl
            sx={{ width: '100%' }}
            variant='standard'
          >
            <InputLabel htmlFor='standard-adornment-password'>
              Password
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type={
                values.showPassword ? 'text' : 'password'
              }
              value={values.password}
              onChange={handleChange('password')}
              sx={{
                fontFamily: 'monospace',
                fontSize: 20,
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Button
            variant='outlined'
            sx={{
              padding: 1,
              margin: 2,
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
