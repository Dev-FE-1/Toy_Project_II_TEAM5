import Flex from '@components/shared/Flex'
import useWeather from '@hooks/useWeather'
import { colors } from '@styles/Colors'
import { format } from 'date-fns/format'
import styled from 'styled-components'

function Weather() {
  const { weatherData, loading } = useWeather()

  if (loading) {
    return <Container>Loading...</Container>
  }

  if (!weatherData) {
    return <Container>Failed to load weather data</Container>
  }

  const date = new Date()
  const formattedDate = format(date, 'MMMM d')

  return (
    <Container $gap="15px">
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
  padding: 5px 0;
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
    bottom: -38%;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 2px dashed #76b8ee;
    z-index: 0;
  }
`

const WeatherImg = styled.img`
  width: 66px;
  z-index: 1;
`

const Message = styled.span`
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  text-shadow: -1.85px 2.78px 0.93px rgba(0, 0, 0, 0.1);
  z-index: 1;
  & sup {
    vertical-align: super;
    font-size: smaller;
  }
`

export default Weather
