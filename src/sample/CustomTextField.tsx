import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'

const CustomTextField: React.FC = () => {
  const [backColor, setBackBolor] = React.useState('orange')
  const [value, setValue] = React.useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const handleFocus = () => {
    setBackBolor('skyblue')
  }

  const handleBlur = () => {
    setBackBolor('tomato')
  }

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: backColor,
      }}
    >
      <FormControl
        sx={{ width: '100%' }}
        variant='standard'
      >
        <InputLabel htmlFor='standard-adornment-password'>
          {value}
        </InputLabel>
        <Input
          id='standard-adornment-password'
          type='text'
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
      </FormControl>
    </Box>
  )
}

export default CustomTextField
