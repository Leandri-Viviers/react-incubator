import React from 'react'
// Strings
import { useTranslation } from 'react-i18next'
// Components
import Background from '../Background'
import CardPageLayout from '../CardPageLayout'
import {
  makeStyles,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@material-ui/core'

const RadioButton = (props) => {
  return (
    <Button
      variant={props.selected ? 'contained' : 'outlined'}
      color="secondary"
      disableElevation
    >
      {props.label}
    </Button>
  )
}

const useStyles = makeStyles({
  flexRow: {
    flexDirection: 'row',
  },
  noMargin: {
    margin: 0,
  },
})

const TimeFormat = (props) => {
  const { t } = useTranslation()
  const classes = useStyles()

  // State
  const [format, setFormat] = React.useState(12)

  // Render
  return (
    <Background>
      <CardPageLayout
        heading={t('welcome_heading')}
        subheading={t('welcome_subheading_time')}
        action={t('button_submit')}
      >
        <p>{format}</p>
        <RadioGroup
          aria-label="format"
          name="format"
          value={format}
          className={classes.flexRow}
        >
          <FormControlLabel
            value={12}
            control={
              <RadioButton
                label={t('time_format_12')}
                selected={format === 12}
              />
            }
            onClick={() => setFormat(12)}
            className={classes.noMargin}
          />
          <FormControlLabel
            value={24}
            control={
              <RadioButton
                label={t('time_format_24')}
                selected={format === 24}
              />
            }
            onClick={() => setFormat(24)}
            className={classes.noMargin}
          />
        </RadioGroup>
      </CardPageLayout>
    </Background>
  )
}

export default TimeFormat
