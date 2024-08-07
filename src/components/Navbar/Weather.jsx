import { useState, useEffect } from 'react'
import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
// import Thunder from '@assets/icons/thunder.svg'
import getCurrentWeather from './FetchWeather'

function Weather() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

  if (loading) {
    return <Container>Loading...</Container>
  }
  if (!weatherData) {
    return <Container>Failed to load weather data</Container>
  }

  const date = new Date()
  const options = { month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <Container $gap="20px">
      <Message>{formattedDate}</Message>
      <WeatherImg
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
      <Message>
        {Math.round(weatherData.main.temp)}
        <sup>o</sup>
      </Message>
    </Container>
  )
}

const Container = styled(Flex)`
  width: 100%;
  /* padding: 16px 0; */
  background: linear-gradient(to top right, #47bfdf, #4a91ff);
  color: ${colors.white};
  font-weight: bold;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 60%;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 2px dashed #76b8ee;
    z-index: 0;
  }
`

const WeatherImg = styled.img`
  z-index: 1;
`

const Message = styled.span`
  display: inline-block;
  font-weight: bold;
  text-shadow: -1.85px 2.78px 0.93px rgba(0, 0, 0, 0.1);
  z-index: 1;
  & sup {
    vertical-align: super;
    font-size: smaller;
  }
`

export default Weather
