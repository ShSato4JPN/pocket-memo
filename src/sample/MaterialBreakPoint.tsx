import React from 'react'
import Box from '@mui/material/Box'

const MaterialBreakPoint = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        backgroundColor: {
          xs: 'orange',
          sm: 'skyblue',
          md: 'pink',
          lg: 'tomato',
          xl: 'yellow',
        },
      }}
    />
  )
}

export default MaterialBreakPoint
