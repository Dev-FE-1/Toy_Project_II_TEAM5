import styled from 'styled-components'
import { colors } from '@styles/Colors'

const StyledButton = ({ text, $backgroundColor, $hoverColor, onClick, margin }) => {
  return (
    <Button
      $backgroundcolor={backgroundColor}
      $hovercolor={hoverColor}
      onClick={onClick}
      $margin={margin}
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
  background-color: ${(props) => props.$backgroundcolor};
  margin: ${(props) => props.$margin || '0'};
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hovercolor};
  }
`

export default StyledButton
