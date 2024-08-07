const getCurrentWeather = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        try {
          const data = await getWeatherByCurrentLocation(lat, lon)
          resolve(data)
        } catch (error) {
          reject(error)
        }
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const getWeatherByCurrentLocation = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_KEY
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  let response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch weather data')
  }

  let data = await response.json()
  return data
}

export default getCurrentWeather
