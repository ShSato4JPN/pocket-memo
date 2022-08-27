import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const MemoShareField = () => {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label='許可する' />
      </FormGroup>
      <FormControl sx={{ margin: 1, width: '100%' }} variant='standard'>
        <InputLabel htmlFor='standard-adornment-password'>Aikotoba</InputLabel>
        <Input
          id='standard-adornment-password'
          type='text'
          sx={{ fontSize: 20, fontFamily: 'monospace' }}
        />
      </FormControl>
    </>
  )
}

export default MemoShareField
