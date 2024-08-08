import styled, { css } from 'styled-components'

function TodoChecklist({ item }) {
  const { title, division } = item
  return (
    <>
      <ColoredCDivision $division={division}></ColoredCDivision>
      <span>{title}</span>
    </>
  )
}

const ColoredCDivision = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  ${(props) =>
    props.$division === 'Meeting' &&
    css`
      background: rgba(255, 59, 59, 0.1);
    `}
  ${(props) =>
    props.$division === 'Prepare' &&
    css`
      background: rgba(255, 150, 27, 0.1);
    `}
  ${(props) =>
    props.$division === 'External' &&
    css`
      background: rgba(0, 133, 255, 0.1);
    `}
  ${(props) =>
    props.$division === 'Report' &&
    css`
      background: rgba(232, 232, 232, 1);
    `}
`

export default TodoChecklist
