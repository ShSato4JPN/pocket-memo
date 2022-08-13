import React from 'react'
import CustomAppBar from '../src/components/CustomAppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Header from '../src/components/top/header/Header'
import Body from '../src/components/top/body/Body'
import Footer from '../src/components/top/footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item mt={3}>
          <Header />
        </Grid>
        <Grid item mt={5}>
          <Body />
        </Grid>
        <Grid item mt={2}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
