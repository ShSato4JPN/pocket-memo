import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

type Props = {
  title: string
  path: string
  message: string
  no: number
}

const HowToItem: React.FC<Props> = (props) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 350,
            height: 310,
          }}
        >
          <Grid
            item
            component='div'
            mb={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottom: 1,
              borderColor: 'primary.main',
              padding: 1,
            }}
          >
            <Box
              component='div'
              sx={{
                border: 1,
                borderColor: 'primary.main',
                borderRadius: 10,
                marginRight: 2,
                width: 40,
              }}
            >
              <Typography
                variant='h5'
                fontFamily='monospace'
                sx={{
                  color: 'primary.main',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {props.no + 1}
              </Typography>
            </Box>
            <Box component='div'>
              <Typography
                variant='h5'
                fontFamily='monospace'
                sx={{
                  color: 'primary.main',
                }}
              >
                {props.title}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            component='div'
            mb={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component='img'
              alt={`how to items no ${props.no}`}
              src={props.path}
              sx={{
                maxWidth: 250,
              }}
            />
          </Grid>
          <Grid
            item
            component='div'
            mb={1}
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography
              variant='subtitle1'
              fontFamily='monospace'
            >
              {props.message}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default HowToItem
