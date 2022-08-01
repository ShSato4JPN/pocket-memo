import React from 'react'
import Logo from './Logo'
import Message from './Message'
import CustomAppBar from './CustomAppBar'
import Box from '@mui/material/Box'

const _sx = {
  marginTop: 1,
}

const header = () => {
  return (
    <>
      <CustomAppBar />
      <Box sx={_sx}>
        <Logo />
        <Message />
      </Box>
    </>
  )
}

export default header
