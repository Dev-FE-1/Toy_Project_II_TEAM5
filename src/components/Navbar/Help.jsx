import QuestionMarkIcon from '@assets/icons/question-mark-icon'
import HelpBg from '@assets/help-bg.svg'
import Flex from '@components/shared/Flex'
import IconWithBackground from '@components/shared/IconWithBackground'
import Modal from '@components/shared/Modal'
import { colors } from '@styles/Colors'
import { useRef } from 'react'
import styled from 'styled-components'

function Help() {
  const link = 'https://opgg-com-image.akamaized.net/attach/images/20190131092018.397736.jpeg'

  const imgRef = useRef(null)

  const handleAnimate = () => {
    setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.style.transform = 'translateX(0)'
      }
    }, 0)
  }

  return (
    <Container>
      <IconWithBackground Icon={QuestionMarkIcon} />
      <Message>도움이 필요하신가요?</Message>
      <Modal Trigger={Trigger} onOpen={handleAnimate}>
        <ImageContainer>
          <img src={link} ref={imgRef} />
        </ImageContainer>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  margin: 130px 0 50px;
  padding: 16px;
  border-radius: 15px;
  background-color: ${colors.primary};
  color: ${colors.white};
  background-image: url('${HelpBg}');
  background-repeat: no-repeat;
  background-position: right;
`
const Message = styled.span`
  display: block;
  margin: 22px 0 27px;
  font-weight: bold;
`

const ImageContainer = styled(Flex)`
  width: 228px;
  height: 221px;
  overflow: hidden;
  & img {
    transform: translateX(100%);
    transition: transform 1.2s linear;
  }
`

const Button = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 10px 0;
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;
`

function Trigger(props) {
  return (
    <Button as="button" {...props}>
      도움 받기
    </Button>
  )
}

export default Help
