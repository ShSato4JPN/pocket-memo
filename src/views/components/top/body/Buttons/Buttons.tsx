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
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}
    >
      <Grid item xs>
        <CreateButton
          width={{ xs: 300, sm: 250 }}
          height={{ xs: 50, sm: 60 }}
        />
      </Grid>
      <Grid item>
        <EditButton
          width={{ xs: 300, sm: 250 }}
          height={{ xs: 50, sm: 60 }}
        />
      </Grid>
    </Grid>
  )
}

export default Buttons
