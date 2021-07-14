function generateParams(obj) {
  let params = ''
  for (const [key, value] of Object.entries(obj)) {
    params += params.length
      ? `&${key}=${value}`
      : `?${key}=${value}`
  }
  return params
}

module.exports = {
  generateParams,
}