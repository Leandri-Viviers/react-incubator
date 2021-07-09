import { createTheme } from '@material-ui/core'
import { grey, cyan } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: cyan['A700'],
    },
  },
})

export default theme
