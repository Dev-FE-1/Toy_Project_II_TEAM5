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
          <SubTitle>양식</SubTitle>
          <MenuImage src={westernImage} alt="플레인 플래터" />
          <FoodTitle>플레인 플래터</FoodTitle>
          <Description>
            다양한 채소와 고기를 곁들인 서양식 플래터입니다. 신선한 재료로 구성되어 있어 건강한 한
            끼를 제공합니다.
          </Description>
          <Price>₩2,000</Price>
          <Calories>칼로리: 750kcal</Calories>
        </WesternFood>
        <KoreanFood>
          <SubTitle>한식</SubTitle>
          <MenuImage src={koreanImage} alt="김치찌개" />
          <FoodTitle>김치찌개</FoodTitle>
          <Description>
            매콤한 김치와 돼지고기가 어우러진 전통적인 한식 김치찌개입니다. 따뜻하고 매운맛이
            일품입니다.
          </Description>
          <Price>₩3,000</Price>
          <Calories>칼로리: 600kcal</Calories>
        </KoreanFood>
      </Menu>
    </MenuContainer>
  )
}

const MenuContainer = styled(ShadowyBox)`
  width: 40%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`

const WesternFood = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const KoreanFood = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.2;
  color: #4a5568;
  margin-bottom: 10px;
`

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 10px;
`

const Calories = styled.p`
  font-size: 14px;
  color: #718096;
  margin-bottom: 5px;
`

const MenuImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`
