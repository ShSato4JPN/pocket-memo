import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ThemeProvider, styled } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import AppTheme from '../../../styles/theme/AppTheme'
import LoginUserIdField from '../atoms/LoginUserIdField'
import LoginPasswordField from '../atoms/LoginPasswordField'

const StyledButton = styled(Button)({
  fontSize: 17,
  margin: 20,
  '&:hover': {
    backgroundColor: green[400],
  },
})

const LoginUserIdForm: React.FC = () => {
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
              maxHeight: { xs: 100 },
              maxWidth: { xs: 100 },
            }}
          />
        </Grid>
        <Grid item xs={12} width={300}>
          <LoginUserIdField setUserId={setUserId} />
        </Grid>
        <Grid item xs={12} width={300}>
          <LoginPasswordField setPassword={setPassword} />
        </Grid>
        <Grid item xs={12}>
          <StyledButton variant='contained'>ログイン</StyledButton>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LoginUserIdForm
