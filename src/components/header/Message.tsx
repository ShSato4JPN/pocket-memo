import React from 'react'
import { Box, Typography } from '@mui/material'

const _sx = {
  textAlign: 'Center',
}

const Message = () => {
  return (
    <Box sx={_sx}>
      <Typography component='h3'>
        ちょっとしたメモをオンライン上で共有できます！
      </Typography>
    </Box>
  )
}

export default Message
