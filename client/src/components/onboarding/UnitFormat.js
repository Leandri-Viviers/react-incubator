import React from 'react'
// Strings
import { useTranslation } from 'react-i18next'
// Components
import Background from '../Background'
import CardPageLayout from '../CardPageLayout'
import { Button, Box, ToggleButtonGroup, ToggleButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const TimeFormat = (props) => {
  const { t } = useTranslation()
  const history = useHistory()

  // State
  const storedValue = localStorage.getItem('unitFormat')
  const [unitFormat, setUnitFormat] = React.useState(storedValue || 'metric')

  // Methods
  const handleFormatChange = (e, value) => {
    setUnitFormat(value)
  }

  const back = () => {
    history.push('/onboarding/time')
  }

  const next = () => {
    localStorage.setItem('unitFormat', unitFormat)
    history.push('/dashboard')
  }

  // Render
  return (
    <Background>
      <CardPageLayout
        heading={t('welcome_heading')}
        subheading={t('welcome_subheading_unit')}
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
            value={unitFormat}
            exclusive
            onChange={handleFormatChange}
            aria-label="unit format"
            size="small"
            color="primary"
            fullWidth
          >
            <ToggleButton value="metric" aria-label="metric">
              {t('unit_format_metric')}
            </ToggleButton>
            <ToggleButton value="imperial" aria-label="imperial">
              <Box>{t('unit_format_imperial')}</Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </CardPageLayout>
    </Background>
  )
}

export default TimeFormat
