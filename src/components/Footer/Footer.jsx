import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { employees } from '@components/Constant/employees'

function Footer() {
  const names = employees.map((employee) => employee.name)
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
  height: 20px;
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
