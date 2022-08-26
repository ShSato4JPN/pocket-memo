import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

const CustomTextArea: React.FC<null> = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl sx={{ width: '100%' }} variant='standard'>
        <InputLabel>{'foobar'}</InputLabel>

        <Input
          multiline={true}
          rows={10}
          maxRows={10}
          fullWidth
          sx={{
            fontFamily: 'monospace',
            fontSize: 20,
          }}
        />
      </FormControl>
    </Box>
  )
}

export default CustomTextArea
