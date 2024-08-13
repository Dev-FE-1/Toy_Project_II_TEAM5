import styled from 'styled-components'

function TeamNameFooter() {
  return <TeamFooter>@2024, Made with FastCampus by 강호연 김수민 이동혁 이윤환 최원지</TeamFooter>
}

const TeamFooter = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: rgba(160, 174, 192, 0.3);
  padding-right: 50px;
`

export default TeamNameFooter
