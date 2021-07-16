// Components
import { Grid, Box, Typography, Link } from '@material-ui/core'

function LinkText(props) {
  const { name, link } = props.children
  return (
    <Link href={link} variant="inherit" color="primary">
      {name}
    </Link>
  )
}

export default function Footer(props) {
  const { user, source } = props.attr

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
