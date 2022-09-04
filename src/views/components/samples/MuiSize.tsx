import React from 'react'
import Box from '@mui/material/Box'

const MuiSize = () => {
  return (
    <Box
      sx={{
        height: 100,
        width: 100,
        backgroundColor: {
          xs: 'tomato',
          sm: 'pink',
          md: 'orange',
          lg: 'skyblue',
          xl: 'yellow',
        },
      }}
    ></Box>
  )
}

export default MuiSize
