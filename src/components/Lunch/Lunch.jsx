import styled from 'styled-components'
import koreanImage from '../../assets/lunch/koreanImage.png'
import westernImage from '../../assets/lunch/westernImage.png'
import ShadowyBox from '@components/shared/ShadowyBox'

export default function Lunch() {
  return (
    <MenuContainer>
      <Title>오늘의 점심 메뉴</Title>
      <Menu>
        <WesternFood>
          <Title>양식</Title>
          <MenuImage src={westernImage} alt="플레인 플래터" />
          <Title>플레인 플래터</Title>
        </WesternFood>
        <KoreanFood>
          <Title>한식</Title>
          <MenuImage src={koreanImage} alt="김치찌개" />
          <Title>김치찌개</Title>
        </KoreanFood>
      </Menu>
    </MenuContainer>
  )
}

const MenuContainer = styled(ShadowyBox)`
  width: 40%;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 22px;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

const WesternFood = styled.div`
  margin: 20px;
  text-align: center;
  border-right: 1px solid #e2e8f0;
  padding-right: 14px;
`

const KoreanFood = styled.div`
  margin: 20px;
  text-align: center;
`

const MenuImage = styled.img`
  width: auto;
  height: 200px;
  margin-bottom: 65px;
`
