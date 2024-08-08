import Modal from '@components/shared/Modal'
import StyledButton from '@components/shared/Button'
import { colors } from '@styles/Colors'
import CorrectionModalContents from './CorrectionModalContents'

function CorrectionTrigger() {
  return (
    <Modal Trigger={ButtonTrigger}>
      <CorrectionModalContents />
    </Modal>
  )
}

function ButtonTrigger({ onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      text="정정 내역"
      $backgroundColor={colors.primary_400}
      $hoverColor={colors.primary_500}
    />
  )
}

export default CorrectionTrigger
