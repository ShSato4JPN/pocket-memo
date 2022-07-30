import React from 'react'
import { Box } from '@mui/material'

const Logo = () => {
  return (
    <>
      <Box
        component='img'
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt='The house from the offer.'
        src='/assets/images/sample.png'
      />
    </>
  )
}

export default Logo
