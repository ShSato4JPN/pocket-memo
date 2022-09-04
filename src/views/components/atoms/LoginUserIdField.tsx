import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'

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
    <FormControl
      variant='standard'
      fullWidth
      sx={{
        '&.Mui-focused fieldset': {
          backgroundColor: 'red',
        },
      }}
    >
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
  )
}

export default LoginUserIdField
