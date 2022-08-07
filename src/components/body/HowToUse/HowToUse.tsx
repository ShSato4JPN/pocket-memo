import React from 'react'
import Grid from '@mui/material/Grid'
import HowToUseCenter from './HowToUseCenter'
import HowToUseRight from './HowToUseRight'
import HowToUseLeft from './HowToUseLeft'

const HowToUse: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
      }}
    >
      <Grid item>
        <HowToUseRight></HowToUseRight>
      </Grid>
      <Grid item>
        <HowToUseCenter></HowToUseCenter>
      </Grid>
      <Grid item>
        <HowToUseLeft></HowToUseLeft>
      </Grid>
    </Grid>
  )
}

export default HowToUse
