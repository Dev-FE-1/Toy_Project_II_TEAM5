import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '@styles/Colors'
import { ProgressBar } from "react-step-progress-bar"
import { todoLists } from '@components/Constant/todoLists'

const CreateProgressbar = ({ completion }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercent(parseInt(completion, 10))
    }, 200)

    return () => clearTimeout(timer)
  }, [completion])

  return (
    <ProgressBarWrapper>
      <ProgressPercent>{completion}%</ProgressPercent>
      <ProgressBar percent={percent} />
    </ProgressBarWrapper>
  )
}

const ProgressBarWrapper = styled.div`
  .RSPBprogressBar {
    width: 150px;
    height: 3px;
    border-radius: 3px;
    background: #e0e0e0;
    overflow: hidden;
  }
  .RSPBprogression {
    height: 100%;
    border-radius: 3px;
    background: ${colors.primary_200};
    transition: width 0.5s ease-in-out;
  }
`

const ProgressPercent = styled.span`
  color: #4fd1c5;
  font-size: 0.9em;
  position: relative;
  bottom: 1px;
`

export default CreateProgressbar