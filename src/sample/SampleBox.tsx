import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const SampleBox: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: {
          xs: 'orange', // 1 小
          sm: 'lightgreen', // 2　 ↑
          md: 'pink', // 3 中
          lg: 'tomato', // 4　 ↓
          xl: 'skyblue', // 5 大
        },
        width: 200,
        height: 300,
      }}
    >
      <Button variant='contained'>test</Button>
      <Typography>test message</Typography>
    </Box>
  )
}

export default SampleBox
