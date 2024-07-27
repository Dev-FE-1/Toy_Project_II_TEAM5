import styled from 'styled-components'

function HomePage() {
  return <Headding>Home</Headding>
}

export const Headding = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-left: 40px;
  font-weight: bold;
  unicode-bidi: isolate;
`
export default HomePage
