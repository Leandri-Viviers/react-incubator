import { makeStyles } from '@material-ui/core'
import BackgroundImage from '../assets/images/background.jpg'

const useStyles = makeStyles({
  coverImage: {
    height: 'calc(100vh - 48px);',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
})

function Background(props) {
  const classes = useStyles()
  return <div className={classes.coverImage}>{props.children}</div>
}

export default Background
