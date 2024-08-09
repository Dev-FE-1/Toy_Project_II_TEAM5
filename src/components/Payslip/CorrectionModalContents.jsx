import { useContext, useState } from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import styled from 'styled-components'
import { ModalContext } from '@components/shared/Modal'
import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import Horizon from '@components/shared/Horizon'
import useFetchCorrections from '@hooks/useFetchCorrection'
import { db } from '@firebase/firebaseConfig'

function CorrectionModalContents() {
  const { setIsOpen } = useContext(ModalContext)
  const { correctionHistory, setCorrectionHistory, error } = useFetchCorrections()
  const [expandedContent, setExpandedContent] = useState({})
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null)

  const handleDeleteClick = (id) => {
    setSelectedItemId(id)
    setIsDeleteConfirmModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (selectedItemId) {
      try {
        const docRef = doc(db, 'corrections', selectedItemId)
        await deleteDoc(docRef)
        setCorrectionHistory((prevHistory) =>
          prevHistory.filter((item) => item.id !== selectedItemId)
        )
        setIsDeleteConfirmModalOpen(false)
      } catch (error) {
        console.error('Error deleting document: ', error)
      }
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteConfirmModalOpen(false)
  }

  const toggleExpand = (id) => {
    setExpandedContent((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  function SubmitButton({ children }) {
    const handleClick = () => {
      setIsOpen(false)
    }

    return <Button onClick={handleClick}>{children}</Button>
  }

  const sortedCorrectionHistory = correctionHistory.sort((a, b) => {
    if (a.status === '결제완료' && b.status !== '결제완료') return 1
    if (a.status !== '결제완료' && b.status === '결제완료') return -1
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <Form>
      <ModalTitle>정정 내역</ModalTitle>
      <Horizon $width="558px" $ml="20px" />
      <Container>
        <Table>
          <Thead>
            <tr>
              <th>날짜</th>
              <th>내용</th>
              <th>상태</th>
              <th></th>
            </tr>
          </Thead>
          <Tbody>
            {sortedCorrectionHistory.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <ContentCell
                  onClick={() => toggleExpand(item.id)}
                  expanded={expandedContent[item.id]}
                  title={expandedContent[item.id] ? '' : item.content}
                >
                  {item.content}
                </ContentCell>
                <td>{item.status}</td>
                <td>
                  <DeleteButton
                    onClick={() => handleDeleteClick(item.id)}
                    disabled={item.status === '결제완료'}
                  >
                    삭제
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        <Flex>
          <SubmitButton onClick={() => setIsOpen(false)}>닫기</SubmitButton>
        </Flex>
      </Container>
      {isDeleteConfirmModalOpen && (
        <ConfirmModal>
          <ConfirmModalContent>
            <ConfirmModalText>삭제하시겠습니까?</ConfirmModalText>
            <Flex>
              <ConfirmButton onClick={handleConfirmDelete}>삭제</ConfirmButton>
              <CancelButton onClick={handleCancelDelete}>취소</CancelButton>
            </Flex>
          </ConfirmModalContent>
        </ConfirmModal>
      )}
    </Form>
  )
}

const Form = styled.div`
  background-color: ${colors.white};
  width: 800px;
  height: 600px;
  border-radius: 15px;
  padding: 10px;
`

const ModalTitle = styled.h2`
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-size: 18px;
  font-weight: bold;
  padding-left: 41px;
`

const Button = styled.button`
  width: 94px;
  height: 32px;
  box-sizing: border-box;
  margin: 20px;
  margin-left: 40px;
  padding: 6px 8px;
  background-color: #4fd1c5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #00bcab;
  }
`

const ContentCell = styled.td`
  white-space: ${({ expanded }) => (expanded ? 'normal' : 'nowrap')};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${({ expanded }) => (expanded ? 'none' : '150px')};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  padding: 28px 40px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 15px;
  thead {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`

const Thead = styled.thead`
  background-color: #effaf8;
  text-align: center;
  th {
    padding: 12px;
    font-weight: 500;
    color: ${colors.gray};
  }
`

const Tbody = styled.tbody`
  display: block;
  width: 100%;
  max-height: 370px;
  overflow-y: auto;
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-bottom: 1px solid #eceff5;
  }
  td {
    padding: 20px;
    color: ${colors.black};
    text-align: center;
  }
`

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ff4c4c;
  }

  &:disabled {
    background-color: #a9a9a9;
    cursor: not-allowed;
  }
`

const ConfirmModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

const ConfirmModalContent = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const ConfirmModalText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;
`

const ConfirmButton = styled(Button)`
  background-color: #ff6b6b;
  &:hover {
    background-color: #ff4c4c;
  }
  margin-right: 0;
`

const CancelButton = styled(Button)`
  background-color: ${colors.primary_300};
  &:hover {
    background-color: ${colors.primary_400};
  }
  margin-right: 30px;
`

export default CorrectionModalContents
