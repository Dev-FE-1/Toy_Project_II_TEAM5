import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '@reducers/userListSlice'
import workListReducer from '@reducers/salarySlice'

export const store = configureStore({
  reducer: {
    employeeList: employeeListReducer,
    workList: workListReducer,
  },
})
