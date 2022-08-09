import React from 'react'
import { Box, AppBar } from '@mui/material'

const Logo: React.FC = () => {
  return (
    <Box
      component='img'
      alt='Site Logo'
      src='/assets/images/sample.png'
      sx={{
        maxHeight: { xs: 300 },
        maxWidth: { xs: 300 },
        justifyContent: 'center',
      }}
    />
  )
}

export default Logo
