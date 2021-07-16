import { Container, AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Navbar(props) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Container max-width="lg">
          <Typography variant="body2">{props.title}</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
