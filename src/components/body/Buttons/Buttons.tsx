import React from 'react'
import Grid from '@mui/material/Grid'
import CreateButton from './CreateButton'
import EditButton from './EditButton'

const Buttons: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
      }}
    >
      <Grid item xs>
        <CreateButton
          width={{ xs: 200, md: 230 }}
          height={{ xs: 50, md: 50 }}
        />
      </Grid>
      <Grid item>
        <EditButton
          width={{ xs: 200, md: 230 }}
          height={{ xs: 50, md: 50 }}
        />
      </Grid>
    </Grid>
  )
}

export default Buttons
