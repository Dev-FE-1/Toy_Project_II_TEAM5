import Header from '@components/Header/Header'
import Calendar from '../../components/Calendar/Calendar'
import Payslip from './Payslip/Payslip'

function SalaryManagementPage() {
  return (
    <>
      <Header header="급여 내역" />
      <Calendar></Calendar>
      <Payslip />
    </>
  )
}
export default SalaryManagementPage
