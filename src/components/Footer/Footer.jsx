import styled from 'styled-components'
import { colors } from '@styles/Colors'

function Footer() {
  const names = ['강호연', '김수민', '이동혁', '이윤환', '최원지']
  return (
    <FooterContainer>
      <span>
        @ 2024, Made with Fast Campus by <HighlightText>다있조</HighlightText> for a better web
      </span>
      <FooterName>
        {names.map((name, index) => (
          <Name key={index}>{name}</Name>
        ))}
      </FooterName>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FooterName = styled.div`
  display: flex;
  color: ${colors.gray};
`

const Name = styled.div`
  margin-left: 30px;
`
const HighlightText = styled.span`
  font-weight: bold;
  color: ${colors.primary_300};
`

export default Footer
