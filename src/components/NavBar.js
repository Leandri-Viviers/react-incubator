import { AppBar, Toolbar, Typography } from '@material-ui/core'

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Typography variant="body2">{this.props.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
