import QuestionMarkIcon from '@assets/icons/question-mark-icon'
import Flex from '@components/shared/Flex'
import IconWithBackground from '@components/shared/IconWithBackground'
import Modal from '@components/shared/Modal'
import { colors } from '@styles/Colors'
import styled from 'styled-components'

function Help() {
  const link = 'https://opgg-com-image.akamaized.net/attach/images/20190131092018.397736.jpeg'

  return (
    <Container>
      <IconWithBackground Icon={QuestionMarkIcon} />
      <Message>도움이 필요하신가요?</Message>
      <Modal trigger={<Button as="button">도움 받기</Button>}>
        <img src={link} />
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 80px;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: ${colors.primary};
  color: ${colors.white};
`
const Message = styled.span`
  display: block;
  margin: 22px 0 27px;
  font-weight: bold;
`

const Button = styled(Flex)`
  width: 100%;
  padding: 10px 0;
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`

export default Help
