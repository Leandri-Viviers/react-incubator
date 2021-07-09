import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Typography variant="body2">{props.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
