import React from 'react'
import Logo from './Logo'
import Message from './Message'
import Box from '@mui/material/Box'

const header = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
      }}
    >
      <Logo />
      <Message />
    </Box>
  )
}

export default header
