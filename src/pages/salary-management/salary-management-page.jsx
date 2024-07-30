import React, { useState } from 'react'
import styled from 'styled-components'
import Payslip from './Payslip/Payslip'
import Payslip2 from './Payslip/Payslip2'

function SalaryManagementPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    <Payslip key="payslip" setCurrentPage={setCurrentPage} />,
    <Payslip2 key="payslip2" setCurrentPage={setCurrentPage} />,
  ]

  return (
    <div>
      <h1>급여관리</h1>
      {pages[currentPage]}
    </div>
  )
}

export default SalaryManagementPage
