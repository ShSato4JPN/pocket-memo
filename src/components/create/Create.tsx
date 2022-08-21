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
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
import MemoCreatingForm from './MemoCreatingForm'
import UserCreatingForm from './UserCreatingForm'
import OtherSettingForm from './OtherSettingForm'
import CustomAppBar from '../CustomAppBar'

const steps = ['ユーザを作成', 'メモを作成', '規約の確認']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <UserCreatingForm />
    case 1:
      return <MemoCreatingForm />
    case 2:
      return <OtherSettingForm />
    default:
      throw new Error('Unknown step')
  }
}

const theme = createTheme()

export default function Create() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <Container
        component='main'
        maxWidth='md'
        sx={{ mb: 4 }}
      >
        <Paper
          variant='outlined' // d
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} // my : margin-top and margin-bottom2
        >
          <Typography
            component='h1'
            variant='h4'
            align='center'
          >
            メモを作ろう！
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <></>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      戻る
                    </Button>
                  )}
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? '保存'
                      : '次へ'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}
