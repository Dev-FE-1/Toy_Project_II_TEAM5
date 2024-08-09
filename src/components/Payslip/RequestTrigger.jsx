import Modal from '@components/shared/Modal'
import StyledButton from '@components/shared/Button'
import { colors } from '@styles/Colors'
import RequestModalContents from './RequestModalContents'

function RequestTrigger() {
  return (
    <Modal Trigger={ButtonTrigger}>
      <RequestModalContents />
    </Modal>
  )
}

function ButtonTrigger({ onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      text="정정 신청"
      $backgroundColor={colors.primary_200}
      $hoverColor={colors.primary_300}
      margin="0 18px 0 0"
    />
  )
}

export default RequestTrigger
