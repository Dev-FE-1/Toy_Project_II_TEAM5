import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '@reducers/userListSlice'
import taskReducer from '@reducers/taskSlice'

export const store = configureStore({
  reducer: {
    employeeList: employeeListReducer,
    tasks: taskReducer,
  },
})
