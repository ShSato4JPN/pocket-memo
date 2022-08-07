import React from 'react'
import Logo from './Logo'
import Message from './Message'
import Box from '@mui/material/Box'

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Message />
    </Box>
  )
}

export default Header
