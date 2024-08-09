import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'

const employeesList = createSlice({
  name: 'employeeList',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeList.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchEmployeeList.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.data = action.payload
      })
      .addCase(fetchEmployeeList.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export const fetchEmployeeList = createAsyncThunk('user/fetchEmployee', async () => {
  const docRef = collection(db, 'PROFILES')
  const docSnap = await getDocs(docRef)
  const employeesList = docSnap.docs.map((doc) => ({
    ...doc.data(),
  }))
  // console.log('list', employeesList)

  return employeesList
})

export default employeesList.reducer
