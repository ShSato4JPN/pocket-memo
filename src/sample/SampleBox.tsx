import React from 'react'
import { Box, Typography } from '@mui/material'

const SampleBox: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: {
          xs: 'orange',
          sm: 'lightgreen',
          md: 'pink',
          lg: 'tomato',
          xl: 'skyblue',
        },
        width: 200,
        height: 300,
      }}
    >
      <Typography>test message</Typography>
    </Box>
  )
}

export default SampleBox
