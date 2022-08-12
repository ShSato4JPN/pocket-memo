import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  path: string
  message: string
  no: number
}

const HowToItem: React.FC<Props> = (props) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'orange',
        alignItems: 'center',
        width: 350,
      }}
    >
      <Grid item>
        <Box
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 1,
          }}
        >
          <Box
            component='div'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: 'primary.main',
              marginRight: 1,
              width: 40,
              height: 40,
            }}
          >
            <Typography variant='h5'>
              {props.no + 1}
            </Typography>
          </Box>
          <Box
            component='div'
            sx={{ backgroundColor: 'pink' }}
          >
            <Typography variant='h5'>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box
          component='img'
          alt={`how to items no ${props.no}`}
          src={props.path}
          sx={{
            maxWidth: 250,
            maxHeight: 250,
            marginBottom: 1,
          }}
        />
      </Grid>
      <Grid item>
        <Box
          component='div'
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant='h6'>
            {props.message}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default HowToItem
