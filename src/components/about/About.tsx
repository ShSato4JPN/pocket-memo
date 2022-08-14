import React from 'react'
import CustomAppBar from '../CustomAppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const About: React.FC = () => {
  return (
    <>
      <CustomAppBar />
      <Box
        sx={{
          marginTop: 5,
          textAlign: 'center',
        }}
      >
        <Typography variant='h2' component='h2'>
          PocketMemoとは?
        </Typography>
        <Typography>foo</Typography>
        <Typography>bar</Typography>
      </Box>
    </>
  )
}

export default About
