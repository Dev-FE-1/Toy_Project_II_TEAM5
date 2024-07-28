import { colors } from '@styles/Colors'
import styled from 'styled-components'
import EmployeeListrow from '../../components/Listrow/EmployeeListrow'

function HomePage() {
  return (
    <>
      <Headding>Home</Headding>
      <EmployeeListrow />
    </>
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
