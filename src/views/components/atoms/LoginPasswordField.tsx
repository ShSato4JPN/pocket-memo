import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface Props {
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

const LoginPasswordField: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('')
  const [showText, setShowText] = useState<boolean>(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value)
  }
  const handleClickShowPassword = () => {
    setShowText(!showText)
  }
  const handleBlur = () => {
    setShowText(false)
    props.setPassword(text)
  }

  return (
    <FormControl variant='standard' fullWidth>
      <InputLabel>パスワード</InputLabel>
      <Input
        type={showText ? 'text' : 'password'}
        value={text}
        onBlur={handleBlur}
        onChange={handleChange}
        sx={{
          fontFamily: 'monospace',
          fontSize: 20,
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
            >
              {showText ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default LoginPasswordField