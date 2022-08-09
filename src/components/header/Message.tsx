import React from 'react'
import { Box, Typography } from '@mui/material'

const Message: React.FC = () => {
  return (
    <Typography component='h3' mt={5} textAlign='center'>
      無料で使えるオンラインメモアプリです！
      <br />
      保存したメモはどの端末からでもアクセスする事ができます。
    </Typography>
  )
}

export default Message
