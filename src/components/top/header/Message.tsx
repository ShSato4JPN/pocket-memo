import React from 'react'
import { Box, Typography } from '@mui/material'

const Message: React.FC = () => {
  return (
    <Typography
      component='p'
      variant='subtitle1'
      mt={3}
      textAlign='center'
      fontFamily='monospace'
    >
      無料で使えるオンラインメモアプリです！
      <br />
      保存したメモはどの端末からでもアクセスする事ができます。
    </Typography>
  )
}

export default Message
