import {
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/system'

const theme = createTheme({
  palette: {
    background: {
      paper: 'orange',
    },
    text: {
      primary: 'tomato',
      secondary: 'lightgreen',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
})

export default theme
