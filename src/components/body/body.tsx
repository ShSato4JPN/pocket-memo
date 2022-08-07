import React from 'react'
import Grid from '@mui/material/Grid'
import Buttons from './Buttons/Buttons'
import HowToUse from './HowToUse/HowToUse'

const body: React.FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 5 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid item>
        <Buttons />
      </Grid>
      <Grid item>
        <HowToUse />
      </Grid>
    </Grid>
  )
}

export default body
