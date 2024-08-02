import styled from 'styled-components'
import { colors } from '@styles/Colors'

const StyledButton = ({ text, backgroundColor, hoverColor, onClick, margin }) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
      margin={margin}
    >
      {text}
    </Button>
  )
}

const Button = styled.button`
  font-weight: 500;
  padding: 9px 23.5px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin || '0'};
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`

export default StyledButton
