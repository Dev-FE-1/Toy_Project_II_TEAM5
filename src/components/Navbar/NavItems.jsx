import HomeIcon from '@assets/icons/home-icon'
import SalaryIcon from '@assets/icons/salary-icon'
import TaskIcon from '@assets/icons/task-icon'
import Flex from '@components/shared/Flex'
import IconWithBackground from '@components/shared/IconWithBackground'
import { colors } from '@styles/Colors'
import styled from 'styled-components'

function NavItems() {
  return (
    <NavItemsContainer as="ul" $direction="column" $align="flex-start" $gap="5px">
      <NavItem name="홈" path="/" Icon={HomeIcon} selected />
      <NavItem name="급여관리" path="/salary" Icon={SalaryIcon} />
      <NavItem name="업무관리" path="/task" Icon={TaskIcon} />
    </NavItemsContainer>
  )
}

const NavItemsContainer = styled(Flex)`
  margin: 22px 0;
`

function NavItem({ name, path, Icon, selected }) {
  return (
    <NavItemContainer selected={selected}>
      <Flex as="a" href={path} $gap="6px" $justify="flex-start">
        <IconWithBackground inverted={selected} Icon={Icon} />
        <span>{name}</span>
      </Flex>
    </NavItemContainer>
  )
}

const NavItemContainer = styled.li`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  font-weight: bold;
  color: ${({ selected }) => (selected ? colors.black : colors.gray)};
  background-color: ${({ selected }) => (selected ? colors.white : colors.lightGray)};

  &:hover {
    color: ${colors.primary};
  }
`

export default NavItems
