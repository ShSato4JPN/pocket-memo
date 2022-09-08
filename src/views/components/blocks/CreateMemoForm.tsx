import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ThemeProvider, styled } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import AppTheme from '../../../styles/theme/AppTheme'
import MemoTitleField from '../atoms/MemoTitleField'
import MemoEditArea from '../atoms/MemoEditArea'

const StyledButton = styled(Button)({
  fontSize: 17,
  margin: 20,
  '&:hover': {
    backgroundColor: green[400],
  },
})

const CreateUserForm: React.FC = () => {
  const [memoTitle, setMemoTitle] = useState<string>('')
  const [memoBody, setMemoBody] = useState<string>('')

  return (
    <ThemeProvider theme={AppTheme}>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} width={350}>
          <MemoTitleField setMemoTitle={setMemoTitle} />
        </Grid>
        <Grid item xs={12} width={350}>
          <MemoEditArea setMemoBody={setMemoBody} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default CreateUserForm
