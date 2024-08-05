import { useContext, useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'
import styled from 'styled-components'
import { ModalContext } from '@components/shared/Modal'
import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import Horizon from '@components/shared/Horizon'

function CorrectionModalContents() {
  const { setIsOpen } = useContext(ModalContext)
  const [correctionHistory, setCorrectionHistory] = useState([])

  useEffect(() => {
    const fetchCorrections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'corrections'))
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setCorrectionHistory(data)
      } catch (error) {
        console.error('Error getting documents: ', error)
      }
    }

    fetchCorrections()
  }, [])

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, 'corrections', id)
      await deleteDoc(docRef)
      setCorrectionHistory((prevHistory) => prevHistory.filter((item) => item.id !== id))
    } catch (error) {
      console.error('Error deleting document: ', error)
    }
  }

  function SubmitButton({ children }) {
    const handleClick = () => {
      setIsOpen(false)
    }

    return <Button onClick={handleClick}>{children}</Button>
  }

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
            {correctionHistory.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.content}</td>
                <td>{item.status}</td>
                <td>
                  <DeleteButton
                    onClick={() => handleDelete(item.id)}
                    disabled={item.status === '결제완료'}
                  >
                    삭제
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
        <Flex>
          <SubmitButton onClick={() => setIsOpen(false)}>닫기</SubmitButton>
        </Flex>
      </Container>
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

export default CorrectionModalContents
