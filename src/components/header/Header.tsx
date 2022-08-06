import React from 'react'
import Logo from './Logo'
import Message from './Message'
import Box from '@mui/material/Box'
import { autocompleteClasses } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
      }}
    >
      <Logo />
      <Message />
    </Box>
  )
}

export default Header
