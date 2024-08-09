import { useEffect, useState } from 'react'

function useWeather() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather()
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return { weatherData, loading }
}

export default useWeather
