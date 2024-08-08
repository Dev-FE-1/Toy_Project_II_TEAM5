import styled from 'styled-components'
import { colors } from '@styles/Colors'

function EmployeeProfile({ item }) {
  const { profile, name, email } = item

  return (
    <>
      <img src={profile} alt={name} />
      <div>
        <p>{name}</p>
        <EmployeeEmail>{email}</EmployeeEmail>
      </div>
    </>
  )
}

const EmployeeEmail = styled.span`
  display: block;
  color: ${colors.gray};
  font-size: 12px;
  margin-top: 5px;
  word-break: break-word;
`

export default EmployeeProfile
