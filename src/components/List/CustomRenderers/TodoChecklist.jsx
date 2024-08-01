import styled, { css } from 'styled-components'

function TodoChecklist({ task, division }) {
  return (
    <>
      <ColoredCDivision $division={division}></ColoredCDivision>
      <span>{task}</span>
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
    props.$division === 'meeting' &&
    css`
      background: rgba(255, 59, 59, 0.1);
    `}
  ${(props) =>
    props.$division === 'prepare' &&
    css`
      background: rgba(255, 150, 27, 0.1);
    `}
  ${(props) =>
    props.$division === 'external' &&
    css`
      background: rgba(0, 133, 255, 0.1);
    `}
  ${(props) =>
    props.$division === 'report' &&
    css`
      background: rgba(232, 232, 232, 1);
    `}
`

export default TodoChecklist
