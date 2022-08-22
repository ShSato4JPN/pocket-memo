import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import { useState } from '@storybook/addons'

interface Props {
  text: State
  setText: React.Dispatch<React.SetStateAction<string>>
  label: string
  limit: number
}

interface State {}

const InputLimitationTextField: React.FC<Props> = (
  props
) => {
  const [backColor, setBackBolor] = React.useState('orange')

  const handleChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      props.setText(event.target.value)
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
          {props.label}
        </InputLabel>
        <Input
          id='standard-adornment-password'
          type='text'
          value={props.text}
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

export default InputLimitationTextField
