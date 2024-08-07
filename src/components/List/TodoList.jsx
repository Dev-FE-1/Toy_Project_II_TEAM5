import Loading from '@components/shared/Loading'
import ShadowyBox from '@components/shared/ShadowyBox.jsx'
import useTodoList from '@hooks/useTodoList.jsx'
import styled from 'styled-components'
import Progressbar from './CustomRenderers/Progressbar.jsx'
import TodoChecklist from './CustomRenderers/TodoChecklist.jsx'
import TodoMore from './CustomRenderers/TodoMore.jsx'
import ListComponent from './ListComponent.jsx'
import Flex from '@components/shared/Flex.jsx'

function ToDoList() {
  const { todos, loading, header } = useTodoList()

  const keys = ['task', 'status', 'completion', 'more']
  const customRenderers = {
    task: TodoChecklist,
    completion: Progressbar,
    more: TodoMore,
  }

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
        keys={keys}
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
