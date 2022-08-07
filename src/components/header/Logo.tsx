import React from 'react'
import { Box, AppBar } from '@mui/material'

const Logo: React.FC = () => {
  return (
    <Box
      component='img'
      sx={{
        width: 350,
        height: 500,
        maxHeight: { xs: 250, md: 184 },
        maxWidth: { xs: 350, md: 250 },
        justifyContent: 'center',
      }}
      alt='Site Logo'
      src='/assets/images/sample.png'
    />
  )
}

export default Logo
