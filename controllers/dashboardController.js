const axios = require('axios');
const paramHelper = require('../paramHelper');

async function getWeatherByCityName(req, res) {
  const params = paramHelper.generateParams({
    q: req.params.name,
    units: 'imperial', // TODO: Replace with req.params.unit
    appid: process.env.OPEN_WEATHER_API_KEY,
  })
  const url = `${process.env.OPEN_WEATHER_URL}/weather${params}`

  try {
    const response = await axios.get(url)
    res.status(200).send(response.data)
  } catch (err) {
    res.status(500).send(new Error(`getWeatherByCityName failed: ${err.code}`))
  }
}

function getWeeklyWeather(req, res) {
  const params = generateParams({
    q: req.params.name,
    units: 'imperial', // TODO: Replace with req.params.unit
    appid: process.env.OPEN_WEATHER_API_KEY,
  })
  const url = `${process.env.OPEN_WEATHER_URL}/forecast${params}`

  // try {
  //   const response = await axios.get(url)
  //   res.status(200).send(response.data)
  // } catch (err) {
  //   res.status(500).send(new Error(`getWeeklyWeather failed: ${err.code}`))
  // }
}

module.exports = {
  getWeatherByCityName,
  getWeeklyWeather,
}