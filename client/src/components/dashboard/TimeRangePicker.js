import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// Components
import { Grid, TextField } from '@material-ui/core'
import { LocalizationProvider, TimePicker } from '@material-ui/lab'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'

const TimePickerTextField = (props) => {
  return <TextField size="small" {...props} />
}

const TimeRangePicker = ({ ampm }) => {
  const { t } = useTranslation()

  // State
  const [fromTime, setFromTime] = useState(null)
  const [toTime, setToTime] = useState(null)

  // Render
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              value={fromTime}
              onChange={(newValue) => {
                setFromTime(newValue)
              }}
              renderInput={(params) => {
                params.inputProps.placeholder = t('input_label_event_from')
                return <TimePickerTextField {...params} />
              }}
              ampm={ampm}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              value={toTime}
              onChange={(newValue) => {
                setToTime(newValue)
              }}
              renderInput={(params) => {
                params.inputProps.placeholder = t('input_label_event_to')
                return <TimePickerTextField {...params} />
              }}
              ampm={ampm}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  )
}

TimeRangePicker.propTypes = {
  ampm: PropTypes.bool.isRequired,
}

export default TimeRangePicker
