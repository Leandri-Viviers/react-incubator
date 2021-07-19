import PropTypes from 'prop-types'
// Components
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  actions: {
    display: 'flex',
    flex: 1,
  },
})

const CardPageLayout = ({ heading, subheading, children, actions }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {subheading}
              </Typography>
              {children}
            </CardContent>
            <CardActions className={classes.actions}>{actions}</CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

CardPageLayout.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  children: PropTypes.element,
  actions: PropTypes.element,
}

export default CardPageLayout
/* Photo by <a href="https://unsplash.com/@jeffaloo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeff Lim</a> on <a href="https://unsplash.com/s/photos/dark-theme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */
