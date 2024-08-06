import { useState } from 'react'
import styled from 'styled-components'
import TimeContainer from './TimeContainer'

export default function ScheduleItem({ item, isActive, onClick, onEditClick, onDeleteClick }) {
  const { time, task, color } = item
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const [isBtnVisible, setIsBtnVisible] = useState(false)

  function handleClick() {
    setIsBtnVisible(!isBtnVisible)
  }

  return (
    <ItemContainer onClick={onClick}>
      <DotLineContainer>
        <Dot color={color} />
        <Line />
      </DotLineContainer>
      <ItemDetails>
        <TimeContainer
          time={formattedTime}
          isBtnVisible={isActive}
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
        />
        <Task onClick={handleClick}>{task}</Task>
      </ItemDetails>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const DotLineContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  z-index: 1;
`

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d2d2d2;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const Task = styled.div`
  font-size: 18px;
  padding: 28px 5px 33px;
  margin: 5px 0;
  line-height: 21px;
  transition: 0.3s;
  &:hover {
    background: rgba(158, 227, 219, 0.1);
  }
`
