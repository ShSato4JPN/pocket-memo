import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  setCount: React.Dispatch<React.SetStateAction<number>>
  label: string
  limit: number
  valid: boolean
}

const InputLimitationTextField: React.FC<Props> = (
  props
) => {
  // キー入力イベント
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputText = event.target.value
    if (inputText.length <= props.limit) {
      props.setText(inputText)
      props.setCount(inputText.length)
    }
    return
  }

  //　フォーカスアウトイベント
  const handleBlur = () => {}

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl
        sx={{ width: '100%' }}
        variant='standard'
      >
        <InputLabel htmlFor='standard-adornment-password'>
          {props.label}
        </InputLabel>
        <TextField
          id='standard-adornment-password'
          type='text'
          value={props.text}
          onChange={handleChange}
          onBlur={handleBlur}
          error
          helperText='test'
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