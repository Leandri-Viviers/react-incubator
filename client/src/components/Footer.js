import PropTypes from 'prop-types'
// Components
import { Grid, Box, Typography, Link } from '@material-ui/core'

const LinkText = ({ children }) => {
  const { name, link } = children
  return (
    <Link href={link} variant="inherit" color="primary">
      {name}
    </Link>
  )
}

LinkText.propTypes = {
  children: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
}

const Footer = ({ attr }) => {
  const { user, source } = attr

  return (
    <footer>
      <Box py={1} px={3} bgcolor="background.default">
        <Grid container justifyContent="flex-end">
          <Grid display="flex" item>
            <Typography variant="caption">
              Photo by <LinkText>{user}</LinkText> on{' '}
              <LinkText>{source}</LinkText>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

Footer.propTypes = {
  attr: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }),
}

export default Footer
