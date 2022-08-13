import React from 'react'
import CustomAppBar from '../CustomAppBar'
import Typography from '@mui/material/Typography'

const About: React.FC = () => {
  return (
    <>
      <CustomAppBar />
      <Typography variant='h1' component='h1'>
        test
      </Typography>
      <Typography>foo</Typography>
      <Typography>bar</Typography>
    </>
  )
}

export default About
