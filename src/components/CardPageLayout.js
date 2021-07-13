import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

function CardPageLayout(props) {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="initial" gutterBottom>
                {props.heading}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.subheading}
              </Typography>
              {props.content}
            </CardContent>
            <CardActions className={classes.actions}>
              {props.actions}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardPageLayout
/* Photo by <a href="https://unsplash.com/@jeffaloo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeff Lim</a> on <a href="https://unsplash.com/s/photos/dark-theme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */
