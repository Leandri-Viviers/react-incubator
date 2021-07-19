import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Link,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import TimeRangePicker from './TimeRangePicker'

const getDate = () => {
  const today = new Date()
  return today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const TodoList = (props) => {
  const items = [...props.items]

  return (
    <List>
      {items.map((item, index) => {
        const labelId = `checkbox-list-label-${index}`
        return props.hideCompleted && item.completed ? null : (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                size="small"
                onClick={() => props.deleteHandler(index)}
                aria-label="delete event"
              >
                <CloseIcon />
              </IconButton>
            }
            disablePadding
            divider
          >
            <ListItemButton
              role={undefined}
              onClick={() => props.toggleHandler(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={item.name}
                sx={item.completed ? { textDecoration: 'line-through' } : null}
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  hideCompleted: PropTypes.bool.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  toggleHandler: PropTypes.func.isRequired,
}

const Itinerary = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const location = localStorage.getItem('location')
  const ampm = localStorage.getItem('timeFormat') === '12'

  // State
  const [event, setEvent] = useState('')
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('events')) || [],
  )
  const [hideCompleted, setHideCompleted] = useState(false)

  // Weather
  useEffect(() => {
    this.getDailyWeather()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err))
  })

  // Methods
  const addEvent = () => {
    const events = [
      ...todos,
      {
        name: event,
        completed: false,
      },
    ]
    // Save state
    setTodos(events)
    // Persist to local storage
    localStorage.setItem('events', JSON.stringify(events))
    // Reset
    setEvent('')
  }

  const updateEvent = (index) => {
    const events = [...todos]
    events[index].completed = !events[index].completed
    // Save state
    setTodos(events)
    // Persist to local storage
    localStorage.setItem('events', JSON.stringify(events))
  }

  const deleteEvent = (index) => {
    const events = [...todos]
    events.splice(index, 1)
    // Save state
    setTodos(events)
    // Persist to local storage
    localStorage.setItem('events', JSON.stringify(events))
  }

  const toggleHideCompleted = () => {
    setHideCompleted(!hideCompleted)
  }

  const displayTodoCount = hideCompleted
    ? todos.filter((todo) => !todo.completed)?.length
    : todos.length

  // Render
  return (
    <Container>
      <Grid container direction="column">
        {/* Weather */}
        <Grid item my={3}>
          <Typography variant="h4"> {location} </Typography>
          <Typography variant="body2"> {getDate()} </Typography>
        </Grid>
        <Divider />
        {/* Add new */}
        <Grid container py={3} spacing={1.5}>
          <Grid item xs={12}>
            <TextField
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder={t('input_label_event')}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} display={event ? 'block' : 'none'}>
            <TimeRangePicker ampm={ampm} />
          </Grid>
          <Grid item xs={12} display={event ? 'block' : 'none'}>
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  onClick={() => addEvent()}
                >
                  {'Save'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        {/* Itinerary */}
        <Grid item my={3}>
          <Box>
            <Typography variant="subtitle1">
              {t('drawer_heading_events')}
            </Typography>
          </Box>
        </Grid>
        {/* Todos */}
        <Grid item my={3}>
          <Grid container direction="column" spacing={1.5}>
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">
                    {t('drawer_heading_todos')}
                  </Typography>
                </Grid>
                <Grid item display="flex">
                  <Link
                    component="button"
                    variant="caption"
                    color={theme.palette.grey[400]}
                    underline="none"
                    onClick={() => toggleHideCompleted()}
                  >
                    {hideCompleted ? 'Show completed' : 'Hide completed'}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {displayTodoCount > 0 ? (
                <Paper
                  variant="outlined"
                  sx={{
                    backgroundColor: 'rgba(18, 18, 18, 0.5)',
                  }}
                >
                  <TodoList
                    items={todos}
                    toggleHandler={updateEvent}
                    deleteHandler={deleteEvent}
                    hideCompleted={hideCompleted}
                  />
                </Paper>
              ) : (
                <Typography variant="body2" color={theme.palette.grey[500]}>
                  {t('empty_events')}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Itinerary
