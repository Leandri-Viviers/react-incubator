import { useState } from 'react'
// Components
import Background from '../Background'
import CardPageLayout from '../CardPageLayout'
import { Box, TextField, Button } from '@material-ui/core'
// Strings
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

export default function CitySelect() {
  const { t } = useTranslation()
  const history = useHistory()

  // State
  const storedValue = localStorage.getItem('location')
  const [city, setCity] = useState(storedValue || '')

  // Methods
  const next = () => {
    localStorage.setItem('location', city)
    history.push('/onboarding/time')
  }

  // Render
  return (
    <Background>
      <CardPageLayout
        heading={t('welcome_heading')}
        subheading={t('welcome_subheading_city')}
        actions={
          <Box display="flex" flex="1" justifyContent="flex-end">
            <Button
              size="small"
              color="white"
              disabled={city.length < 1}
              onClick={() => next()}
            >
              {t('button_next')}
            </Button>
          </Box>
        }
      >
        <Box mt={3}>
          <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label={t('input_label_city')}
            placeholder={t('input_placeholder_city')}
            color="primary"
            variant="outlined"
            fullWidth
            autoFocus
          />
        </Box>
      </CardPageLayout>
    </Background>
  )
}
