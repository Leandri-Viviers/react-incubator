import PropTypes from 'prop-types'
// Components
import { Box, Drawer } from '@material-ui/core'
import WeatherImage from '../../assets/images/weather.jpg'

const drawerWidth = 350

const LeftPersistentDrawer = ({ content, children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            top: '48px',
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundImage: `url(${WeatherImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'cover',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {content}
      </Drawer>
      <Box component="main">{children}</Box>
    </Box>
  )
}

LeftPersistentDrawer.propTypes = {
  content: PropTypes.element,
  children: PropTypes.element,
}

export default LeftPersistentDrawer
