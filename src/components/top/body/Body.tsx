import React from 'react'
import Grid from '@mui/material/Grid'
import Buttons from './Buttons/Buttons'
import HowToForm from './HowToForm/HowToForm'

const body: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid item>
        <Buttons />
      </Grid>
      <Grid item mt={6}>
        <HowToForm />
      </Grid>
    </Grid>
  )
}

export default body
