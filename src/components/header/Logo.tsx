import React from 'react'
import { Box, AppBar } from '@mui/material'

const Logo = () => {
  return (
    <>
      <Box
        component='h1'
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          sx={{
            height: 250,
            width: 350,
            maxHeight: { xs: 250, md: 184 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt='image of site log.'
          src='/assets/images/sample.png'
        />
      </Box>
    </>
  )
}

export default Logo
