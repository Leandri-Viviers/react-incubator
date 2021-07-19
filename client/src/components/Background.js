import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import BackgroundImage from '../assets/images/background.jpg'
import Footer from './Footer'

const useStyles = makeStyles({
  coverImage: {
    height: 'calc(100vh - 35.2px - 48px);',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
})

const Background = (props) => {
  const classes = useStyles()
  const attr = {
    user: {
      name: 'Jeff Lim',
      link: 'https://unsplash.com/@jeffaloo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
    source: {
      name: 'Unsplash',
      link: 'https://unsplash.com/s/photos/dark-theme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  }

  return (
    <>
      <div className={classes.coverImage}>{props.children}</div>
      <Footer attr={attr}></Footer>
    </>
  )
}

Background.propTypes = {
  children: PropTypes.element,
}

export default Background
