import PropTypes from 'prop-types'
// Components
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = ({ title }) => {
  return (
    <AppBar position="static" color="primary" sx={{ position: 'relative' }}>
      <Toolbar variant="dense">
        <Typography variant="body2">{title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
