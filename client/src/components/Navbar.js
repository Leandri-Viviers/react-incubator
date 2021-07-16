import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = (props) => {
  return (
    <AppBar position="static" color="primary" sx={{ position: 'relative' }}>
      <Toolbar variant="dense">
        <Typography variant="body2">{props.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
