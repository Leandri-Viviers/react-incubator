import { createTheme } from '@material-ui/core'
import { grey, cyan } from '@material-ui/core/colors'

const theme = createTheme({
  spacing: 8,
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: cyan['700'],
    },
  },
})

export default theme
