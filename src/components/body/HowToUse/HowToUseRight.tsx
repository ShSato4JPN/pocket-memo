import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const HowToUseRight: React.FC = () => {
  return (
    <Box>
      <Typography
        sx={{
          height: 250,
          width: 350,
          maxHeight: { xs: 250, md: 184 },
          maxWidth: { xs: 350, md: 250 },
          justifyContent: 'center',
          backgroundColor: 'skyblue',
        }}
      >
        Right
      </Typography>
    </Box>
  )
}

export default HowToUseRight
