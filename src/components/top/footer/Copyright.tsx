import React from 'react'
import Typography from '@mui/material/Typography'

const Copyright: React.FC = () => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      sx={{ mt: 8, mb: 4 }}
    >
      {'Copyright © '}
      PocketWeb {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
