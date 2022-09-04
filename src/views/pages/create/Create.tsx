import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CreatMemo from './CreatMemo'
import CreateUser from './CreateUser'
import CreateMemoOption from './CreateMemoOption'
import CustomAppBar from '../CustomAppBar'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const steps = ['ユーザを作成', 'メモを作成', 'メモの設定']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <CreateUser />
    case 1:
      return <CreatMemo />
    case 2:
      return <CreateMemoOption />
    default:
      throw new Error('Unknown step')
  }
}

export default function Create() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Box component={'div'}>
      <CssBaseline />
      <CustomAppBar />
      <Container component='main' maxWidth='md' sx={{ mb: 5 }}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } }} // my : margin-top and margin-bottom2
        >
          <Typography component='h1' variant='h4' align='center'>
            メモを作ろう！
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 2, pb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box component={'div'}>
            <Box component={'div'}>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    戻る
                  </Button>
                )}
                <Button
                  variant='contained'
                  onClick={
                    activeStep === steps.length - 1 ? handleOpen : handleNext
                  }
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? '作成' : '次へ'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='create-memo-dialog'>
          {'メモを作成しますか？'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            メモが第三者に盗聴されたとしても本サイトは責任を取る事ができません。
            <br />
            同意いただける方のみ本サービスをご利用ください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={handleClose} autoFocus>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
