import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ThemeProvider, styled } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import AppTheme from '../../../styles/theme/AppTheme'
import RegisterUserIdField from '../atoms/RegisterUserIdField'
import RegisterPasswordField from '../atoms/RegisterPasswordField'

const StyledButton = styled(Button)({
  fontSize: 17,
  margin: 20,
  '&:hover': {
    backgroundColor: green[400],
  },
})

const CreateUserForm: React.FC = () => {
  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <ThemeProvider theme={AppTheme}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12}>
          <Box
            component='img'
            alt='Site Logo'
            src='/assets/images/sample.png'
            sx={{
              maxHeight: { xs: 300 },
              maxWidth: { xs: 300 },
            }}
          />
        </Grid>
        <Grid item xs={12} width={350} sx={{ padding: 2 }}>
          <LoginUserIdField setUserId={setUserId} />
        </Grid>
        <Grid item xs={12} width={350}>
          <LoginPasswordField setPassword={setPassword} />
        </Grid>
        <Grid item xs={12}>
          <StyledButton variant='contained'>続ける</StyledButton>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default CreateUserForm
