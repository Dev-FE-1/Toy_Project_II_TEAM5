import { colors } from '@styles/Colors'
import styled from 'styled-components'
import Lunch from './Lunch/Lunch'

function HomePage() {
  return (
    <div>
      <Headding>Home</Headding>
      <Lunch />
    </div>
  )
}

export const Headding = styled.h1`
  display: block;
  font-size: 2em;
  color: ${colors.primary};
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-left: 40px;
  font-weight: bold;
  unicode-bidi: isolate;
`
export default HomePage
