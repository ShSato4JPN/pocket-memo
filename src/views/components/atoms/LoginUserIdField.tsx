import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import { ThemeProvider } from '@emotion/react'
import AppTheme from '../../../styles/theme/AppTheme'

interface Props {
  setUserId: React.Dispatch<React.SetStateAction<string>>
}

const LoginUserIdField: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('')
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value)
  }
  const handleBlur = () => {
    props.setUserId(text)
  }

  return (
    <ThemeProvider theme={AppTheme}>
      <FormControl variant='standard' fullWidth>
        <InputLabel>ユーザーID</InputLabel>
        <Input
          type='text'
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
      </FormControl>
    </ThemeProvider>
  )
}

export default LoginUserIdField
