import React from 'react'
import CustomAppBar from '../src/components/CustomAppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Header from '../src/components/header/Header'
import Body from '../src/components/body/Body'
import Footer from '../src/components/footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header />
        <Body />
        <Footer />
      </Box>
    </>
  )
}

export default Home
