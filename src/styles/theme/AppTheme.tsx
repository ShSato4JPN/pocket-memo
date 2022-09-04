import { createTheme } from '@mui/material/styles'
import { green, grey } from '@mui/material/colors'

const AppTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: grey[200],
    },
  },
})

export default AppTheme
