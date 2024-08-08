import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@firebase/firebaseConfig'
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from 'firebase/firestore'

const removeLeadingZero = (str) => str.replace(/^0+/, '')

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async ({ employeeId, month }) => {
  const stringMonth = removeLeadingZero(month.toString())
  // const stringDay = removeLeadingZero(day.toString())
  const docRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', stringMonth)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
  // if (docSnap.exists()) {
  //   const data = docSnap.data()
  //   return data[stringDay] || []
  // }
  // return []
})

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ employeeId, month, day, taskData }) => {
    const stringMonth = removeLeadingZero(month.toString())
    const stringDay = removeLeadingZero(day.toString())
    const docRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', stringMonth)
    const newTask = { ...taskData, id: Date.now().toString() }

    await setDoc(
      docRef,
      {
        [stringDay]: arrayUnion(newTask),
      },
      { merge: true }
    )

    return newTask
  }
)

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ employeeId, month, day, taskId, taskData }) => {
    console.log('updateTask called')
    const stringMonth = removeLeadingZero(month.toString())
    const stringDay = removeLeadingZero(day.toString())
    const docRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', stringMonth)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      const tasks = data[stringDay] || []
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, ...taskData } : task
      )

      await updateDoc(docRef, { [stringDay]: updatedTasks })

      return { taskId, taskData }
    } else {
      throw new Error('Document does not exist')
    }
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ employeeId, month, day, taskId }) => {
    const stringMonth = removeLeadingZero(month.toString())
    const stringDay = removeLeadingZero(day.toString())
    const docRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', stringMonth)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      const tasks = data[stringDay] || []
      const updatedTasks = tasks.filter((task) => task.id !== taskId)
      await updateDoc(docRef, { [stringDay]: updatedTasks })
      return taskId
    }
  }
)

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log('fetchTasks fulfilled with payload', action.payload)
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addTask.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateTask.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const { taskId, taskData } = action.payload
        const existingTask = state.data.find((task) => task.id === taskId)
        if (existingTask) {
          Object.assign(existingTask, taskData)
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteTask.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = state.data.filter((task) => task.id !== action.payload)
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default taskSlice.reducer
