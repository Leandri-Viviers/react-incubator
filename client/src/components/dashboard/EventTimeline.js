import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
// Components
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const EventTimeline = ({ items }) => {
  const classes = useStyles()

  return (
    <Timeline>
      {items.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={item.color || 'secondary'}></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle1">{item.time}</Typography>
                <Typography variant="body2">{item.name}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

EventTimeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      time: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
}

export default EventTimeline
