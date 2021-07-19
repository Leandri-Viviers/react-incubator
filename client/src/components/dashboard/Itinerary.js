import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@material-ui/core/styles'
// Components
import {
  Container,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
  Paper,
  Link,
} from '@material-ui/core'
import TimeRangePicker from './TimeRangePicker'
import TodoList from './TodoList'

const getDate = () => {
  const today = new Date()
  return today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const Itinerary = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const location = localStorage.getItem('location')
  const ampm = localStorage.getItem('timeFormat') === '12'

  // State
  const [weather, setWeather] = useState({ temp: '', forecast: '' })
  const [event, setEvent] = useState('')
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('events')) || [],
  )
  const [hideCompleted, setHideCompleted] = useState(false)

  // ComponentDidMount
  useEffect(() => {
    const unitFormat = localStorage.getItem('unitFormat')
    const degrees = `°${unitFormat === 'metric' ? 'C' : 'F'}`
    async function getDailyWeather() {
      const response = await fetch(
        `/weatherByCityName/${location}&${unitFormat}`,
      )
      const body = await response.json()

      if (response.status !== 200) {
        throw Error(body.message)
      }
      return body
    }

    getDailyWeather()
      .then((res) => {
        setWeather({
          temp: `${res.main.temp}${degrees}`,
          forecast: res.weather[0]?.main,
        })
      })
      .catch((err) => console.log(err))
  }, [location])

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
          <Typography variant="body2" color={theme.palette.grey[300]}>
            {getDate()}
          </Typography>
          <Typography variant="caption" color={theme.palette.grey[500]}>
            {`${weather.temp}, ${weather.forecast}`}
          </Typography>
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
          <Grid container direction="column" spacing={1.5}>
            <Grid item>
              <Typography variant="subtitle1">
                {t('drawer_heading_events')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color={theme.palette.grey[400]}
                sx={{ textShadow: '0 0 6px black' }}
              >
                {t('empty_events')}
              </Typography>
            </Grid>
          </Grid>
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
                    sx={{ textShadow: '0 0 6px black' }}
                    underline="none"
                    onClick={() => toggleHideCompleted()}
                  >
                    {hideCompleted
                      ? t('button_show_completed')
                      : t('button_hide_completed')}
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
                <Typography variant="body2" color={theme.palette.grey[300]}>
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
