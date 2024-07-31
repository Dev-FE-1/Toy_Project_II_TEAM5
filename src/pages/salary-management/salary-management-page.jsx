import { Headding } from '@pages/home/home-page'
import Payslip from './Payslip/Payslip'
import Payslip2 from './Payslip/Payslip2'

function SalaryManagementPage() {
  return (
    <>
      <Headding>급여관리</Headding>
      <Payslip />
      <Payslip2 />
    </>
  )
}

export default SalaryManagementPage
