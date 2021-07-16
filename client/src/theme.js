import { createTheme } from '@material-ui/core/styles'
import { cyan } from '@material-ui/core/colors'

const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[700],
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    caption: {
      letterSpacing: 'initial',
    },
  },
})

export default theme
