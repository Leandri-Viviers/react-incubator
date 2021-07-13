// Components
import { Container, Grid, Box, Typography, Link } from '@material-ui/core'

function LinkText(props) {
  const { name, link } = props.children
  return (
    <Link href={link} variant="inherit" color="secondary">
      {name}
    </Link>
  )
}

export default function Footer(props) {
  const { user, source } = props.attr

  return (
    <footer>
      <Box py={1} bgcolor="primary.main" color="white">
        <Container max-width="lg">
          <Grid container alignItems="flex-end" justifyContent="flex-end">
            <Grid item>
              <Box>
                <Typography variant="caption">
                  Photo by <LinkText>{user}</LinkText> on{' '}
                  <LinkText>{source}</LinkText>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}
