import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '@reducers/userListSlice'

export const store = configureStore({
  reducer: {
    employeeList: employeeListReducer,
  },
})
