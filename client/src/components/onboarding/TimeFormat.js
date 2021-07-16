import React from 'react'
// Strings
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
// Components
import Background from '../Background'
import CardPageLayout from '../CardPageLayout'
import { Button, Box, ToggleButtonGroup, ToggleButton } from '@material-ui/core'

const TimeFormat = (props) => {
  const { t } = useTranslation()
  const history = useHistory()

  // State
  const storedValue = localStorage.getItem('timeFormat')
  const [timeFormat, setTimeFormat] = React.useState(Number(storedValue) || 12)

  // Methods
  const handleFormatChange = (e, value) => {
    setTimeFormat(value)
  }

  const back = () => {
    history.push('/onboarding')
  }

  const next = () => {
    localStorage.setItem('timeFormat', timeFormat)
    history.push('/onboarding/unit')
  }

  // Render
  return (
    <Background>
      <CardPageLayout
        heading={t('welcome_heading')}
        subheading={t('welcome_subheading_time')}
        actions={
          <Box display="flex" flex="1" justifyContent="space-between">
            <Button color="white" size="small" onClick={() => back()}>
              {t('button_back')}
            </Button>
            <Button color="white" size="small" onClick={() => next()}>
              {t('button_next')}
            </Button>
          </Box>
        }
      >
        <Box mt={3}>
          <ToggleButtonGroup
            value={timeFormat}
            exclusive
            onChange={handleFormatChange}
            aria-label="time format"
            size="small"
            color="primary"
            fullWidth
          >
            <ToggleButton value={12} aria-label="12 hours">
              {t('time_format_12')}
            </ToggleButton>
            <ToggleButton value={24} aria-label="24 hours">
              <Box>{t('time_format_24')}</Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </CardPageLayout>
    </Background>
  )
}

export default TimeFormat
