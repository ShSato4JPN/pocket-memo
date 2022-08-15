import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export default function MemoCreateForm() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            メモのタイトル *
          </Typography>
          <TextField
            required
            id='memo-title'
            name='title'
            placeholder='title'
            fullWidth
            autoComplete='given-name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            メモの内容 *
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextareaAutosize
                required
                id='memo-body'
                minRows={10}
                name='body'
                placeholder='body'
                style={{
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
