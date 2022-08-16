import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export default function MemoSettingForm() {
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
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            ユーザ名 *
          </Typography>
          <FormControl
            sx={{
              margin: 1,
              width: '50%',
            }}
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            パスワード *
          </Typography>
          <FormControl
            sx={{ margin: 1, width: '50%' }}
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            合言葉
          </Typography>
          <FormControl
            sx={{ margin: 1, width: '50%' }}
            variant='standard'
          >
            <InputLabel htmlFor='standard-adornment-password'>
              Aikotoba
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
        </Grid>
      </Grid>
    </>
  )
}
