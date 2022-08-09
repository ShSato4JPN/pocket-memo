import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { fontSize } from '@mui/system'

type Props = {
  title: string
  path: string
  message: string
  no: number
}

const HowToItem: React.FC<Props> = (props) => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'orange',
          width: 350,
        }}
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography>{props.no + 1}</Typography>
            </Grid>
            <Grid item>
              <Typography>{props.title}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            component='img'
            alt={`how to items no ${props.no}`}
            src={props.path}
            sx={{
              maxWidth: 250,
              maxHeight: 250,
            }}
          />
        </Grid>
        <Grid item>
          <Typography>{props.message}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HowToItem
