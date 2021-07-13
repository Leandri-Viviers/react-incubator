import { useState } from 'react'
// Components
import Background from './Background'
import CardPageLayout from './CardPageLayout'
import { Box, TextField, Button } from '@material-ui/core'
// Strings
import { useTranslation } from 'react-i18next'

function storeToLocal(value) {
  localStorage.setItem('city', value)
}

function CitySetup() {
  const { t } = useTranslation()
  // State
  const [city, setCity] = useState('')

  return (
    <Background>
      <CardPageLayout
        heading={t('welcome_heading')}
        subheading={t('welcome_subheading_city')}
        content={
          <Box mt={2.5}>
            <TextField
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label={t('input_label_city')}
              color="secondary"
              variant="outlined"
              fullWidth
            />
          </Box>
        }
        actions={
          <Button color="secondary" onClick={storeToLocal(city)}>
            {t('button_submit')}
          </Button>
        }
      ></CardPageLayout>
    </Background>
  )
}

export default CitySetup
