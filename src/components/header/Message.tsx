import React from 'react'
import { Box, Typography } from '@mui/material'

const _sx = {
  textAlign: 'Center',
}

const Message = () => {
  return (
    <Box sx={_sx}>
      <Typography component='h3'>
        Test message Test Messate Test Message this site is
        PocketMemo
      </Typography>
    </Box>
  )
}

export default Message
