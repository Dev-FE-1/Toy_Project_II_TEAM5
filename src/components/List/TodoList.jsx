import Loading from '@components/shared/Loading'
import ShadowyBox from '@components/shared/ShadowyBox.jsx'
import useTodoList from '@hooks/useTodoList.jsx'
import styled from 'styled-components'
import Progressbar from './CustomRenderers/Progressbar.jsx'
import TodoChecklist from './CustomRenderers/TodoChecklist.jsx'
import TodoMore from './CustomRenderers/TodoMore.jsx'
import ListComponent from './ListComponent.jsx'
import Flex from '@components/shared/Flex.jsx'
import { TODO_KEYS } from '@constants/Keys.js'

const customRenderers = {
  task: TodoChecklist,
  completion: Progressbar,
  more: TodoMore,
}

function ToDoList() {
  const { todos, loading, header } = useTodoList()

  if (loading) {
    return (
      <Center>
        <Loading />
      </Center>
    )
  }

  return (
    <ListContainer>
      <ListComponent
        title="오늘의 할 일"
        headers={header}
        items={todos}
        keys={TODO_KEYS}
        customRenderers={customRenderers}
      />
    </ListContainer>
  )
}

const Center = styled(Flex)`
  width: 100%;
`

const ListContainer = styled(ShadowyBox)`
  width: 100%;
`

export default ToDoList
