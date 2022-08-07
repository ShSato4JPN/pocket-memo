import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

{
  /* <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  {' '}
                  Forgot password?{' '}
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {' '}
                  {"Don't have an account? Sign Up"}{' '}
                </Link>
              </Grid>
            </Grid> */
}

const Buttons = () => {
  return (
    <Grid container width={250} height={50}>
      <Grid item xs>
        <Button>メモを作成する</Button>
      </Grid>
      <Grid item>
        <Button>メモを見る</Button>
      </Grid>
    </Grid>
  )
}

export default Buttons
