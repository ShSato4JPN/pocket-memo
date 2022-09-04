import React from 'react'
import Logo from './Logo'
import Message from './Message'
import Grid from '@mui/material/Grid'

const Header: React.FC = () => {
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
        <Logo />
      </Grid>
      <Grid item>
        <Message />
      </Grid>
    </Grid>
  )
}

export default Header
