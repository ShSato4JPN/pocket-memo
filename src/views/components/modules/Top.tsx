import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ThemeProvider, styled } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import { useRouter } from 'next/router'
import AppTheme from '../../../styles/theme/AppTheme'
import LoginModal from './LoginModal'

const MemoCreateButton = styled(Button)({
  fontSize: 17,
  marginTop: 20,
  '&:hover': {
    backgroundColor: green[400],
  },
})

const UserCreateButton = styled(Button)({
  fontSize: 17,
  marginTop: 20,
})

const Top: React.FC = () => {
  const router = useRouter()

  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleMemoCreateClick = () => {
    setDialogOpen(true)
  }

  const handleUserCreateClick = () => {
    router.push('/create/user')
  }

  return (
    <ThemeProvider theme={AppTheme}>
      <Box>
        <Grid
          container
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
          <Grid item xs={12}>
            <Typography
              component='p'
              variant='subtitle1'
              marginTop={1}
              textAlign='center'
              fontFamily='monospace'
            >
              無料で使えるオンラインメモアプリです！
              <br />
              保存したメモはどの端末からでもアクセスする事ができます。
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <MemoCreateButton
              variant='contained'
              onClick={handleMemoCreateClick}
            >
              メモる
            </MemoCreateButton>
            <UserCreateButton onClick={handleUserCreateClick}>
              ユーザを作成する
            </UserCreateButton>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='body2'
              color='text.secondary'
              align='center'
              sx={{ marginTop: 8, marginBottom: 4 }}
            >
              {'Copyright © '}
              PocketWeb {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <LoginModal open={dialogOpen} setOpen={setDialogOpen} />
    </ThemeProvider>
  )
}

export default Top
