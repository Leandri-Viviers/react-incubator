import * as React from 'react'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import WeatherImage from '../../assets/images/weather.jpg'

const drawerWidth = 350

export default function PermanentDrawerLeft(props) {
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
        {props.content}
      </Drawer>
      <Box
        component="main"
        // sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
