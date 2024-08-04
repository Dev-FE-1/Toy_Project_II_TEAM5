import Flex from '@components/shared/Flex'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import NotFoundImg from '/404.jpg'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoback = () => {
    navigate(-1)
  }

  return (
    <Container>
      <Flex $gap="120px">
        <Title>
          404
          <br />
          <Paragraph>Not Found</Paragraph>
        </Title>
        <ImageContainer>
          <img src={NotFoundImg} alt="404" />
          <You> 당신은 </You>
        </ImageContainer>
      </Flex>
      <GoBack onClick={handleGoback}>{'< '}돌아가기</GoBack>
    </Container>
  )
}

const Container = styled(Flex)`
  flex-direction: column;
  gap: 60px;
  width: 100%;
  height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.white};
`

const Title = styled.h1`
  font-size: 400px;
  line-height: 0.4;
  text-align: center;
`

const Paragraph = styled.span`
  font-size: 128px;
`

const ImageContainer = styled.div`
  position: relative;
`

const You = styled.span`
  padding: 5px 24px;
  font-size: 52px;
  font-weight: bold;
  color: yellow;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 102px;
  left: 80px;
`

const GoBack = styled.span`
  font-size: 128px;
  text-align: left;
  cursor: pointer;
`

export default NotFoundPage
