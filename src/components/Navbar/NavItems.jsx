import HomeIcon from '@assets/icons/home-icon'
import SalaryIcon from '@assets/icons/salary-icon'
import TaskIcon from '@assets/icons/task-icon'
import Flex from '@components/shared/Flex'
import IconWithBackground from '@components/shared/IconWithBackground'
import { colors } from '@styles/Colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useCurrentPath from '@hooks/useCurrentPath'
import { useColorMode } from '@chakra-ui/react'

function NavItems() {
  return (
    <NavItemsContainer as="ul" $direction="column" $align="flex-start" $gap="5px">
      <NavItem name="홈" path="/" Icon={HomeIcon} />
      <NavItem name="급여관리" path="/salary" Icon={SalaryIcon} />
      <NavItem name="업무관리" path="/task" Icon={TaskIcon} />
      <NavItem name="테스트" path="/test" Icon={TaskIcon} />
    </NavItemsContainer>
  )
}

const NavItemsContainer = styled(Flex)`
  margin: 22px 0;
`

function NavItem({ name, path, Icon }) {
  const pathname = useCurrentPath()
  const selected = path === pathname
  const { colorMode } = useColorMode()

  return (
    <NavItemContainer selected={selected} colorMode={colorMode}>
      <Link to={path}>
        <Flex $gap="6px" $justify="flex-start">
          <IconWithBackground $inverted={selected} Icon={Icon} />
          <span>{name}</span>
        </Flex>
      </Link>
    </NavItemContainer>
  )
}

const NavItemContainer = styled.li`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  font-weight: bold;
  color: ${({ selected, colorMode }) =>
    selected ? (colorMode === 'light' ? colors.black : colors.white) : colors.gray};
  background-color: ${({ selected, colorMode }) =>
    selected
      ? colorMode === 'light'
        ? colors.white
        : colors.gray[700]
      : colorMode === 'light'
        ? colors.lightGray
        : colors.gray[800]};

  &:hover {
    color: ${colors.primary};
  }
`

export default NavItems
