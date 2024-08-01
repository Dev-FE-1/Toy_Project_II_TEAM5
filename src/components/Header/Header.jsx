import styled from 'styled-components'

function Header({ header }) {
  return (
    <HeaderBox>
      <h1>{header}</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  width: 100%;
  height: 90px;
  background: #fff;
  border-radius: 15px;
  font-size: 24px;
  font-weight: 700;
`

export default Header
