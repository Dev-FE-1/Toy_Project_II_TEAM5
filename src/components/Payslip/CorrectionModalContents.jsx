import { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '@components/shared/Modal'
import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import Horizon from '@components/shared/Horizon'

function CorrectionModalContents() {
  const { setIsOpen } = useContext(ModalContext)

  function SubmitButton({ children }) {
    const handleClick = () => {
      setIsOpen(false)
    }

    return <Button onClick={handleClick}>{children}</Button>
  }

  const correctionHistory = [
    { date: '24.07.05', content: '정정신청 5', status: '결제완료' },
    { date: '24.07.05', content: '정정신청 5', status: '결제완료' },
    { date: '24.07.01', content: '정정신청 4', status: '결제대기' },
    { date: '24.06.01', content: '정정신청 3', status: '결제대기' },
    { date: '24.05.01', content: '정정신청 2', status: '결제대기' },
    { date: '24.04.01', content: '정정신청 1', status: '결제완료' },
  ]

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
            {correctionHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.content}</td>
                <td>{item.status}</td>
                <td>
                  <DeleteButton>삭제</DeleteButton>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
        <Flex>
          <SubmitButton>닫기</SubmitButton>
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
`

export default CorrectionModalContents
