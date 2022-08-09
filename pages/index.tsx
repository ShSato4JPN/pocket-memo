import React from 'react'
import CustomAppBar from '../src/components/CustomAppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Header from '../src/components/header/Header'
import Body from '../src/components/body/Body'
import Footer from '../src/components/footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <Grid
        container
        spacing={5}
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Body />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
