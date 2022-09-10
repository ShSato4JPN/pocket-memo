import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface State {
  setPeriod: React.Dispatch<React.SetStateAction<string>>
}

const LoginButton: React.FC<State> = (props) => {
  const periodList = [1, 2, 3, 4, 5, 6, 7]
  const label = '保存期間'
  const [periodValue, setPeriodValue] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setPeriodValue(event.target.value as string)
  }

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={periodValue}
          label={label}
          onChange={handleChange}
        >
          {periodList.map((v) => (
            <MenuItem value={v} key={v}>
              {v}日
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LoginButton
