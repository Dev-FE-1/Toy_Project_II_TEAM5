import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'

const workListSlice = createSlice({
  name: 'workList',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkList.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchWorkList.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.data = action.payload
      })
      .addCase(fetchWorkList.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})

export const fetchWorkList = createAsyncThunk('workList/fetchWorkList', async (month, thunkAPI) => {
  try {
    const docRef = doc(db, `EMPLOYEES/Zrghj2Jf3CVwQ7jSOmjCXYBBlek1/ATTENDENCE/${month}`)
    const docSnap = await getDoc(docRef)

    if (docSnap.empty) {
      return thunkAPI.rejectWithValue('No documents found')
    } else {
      return docSnap.data()
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export default workListSlice.reducer
