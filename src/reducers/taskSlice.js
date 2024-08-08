import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@firebase/firebaseConfig'
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from 'firebase/firestore'

const removeLeadingZero = (str) => str.replace(/^0+/, '')

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ employeeId, month, day }) => {
    const stringMonth = removeLeadingZero(month.toString())
    const stringDay = removeLeadingZero(day.toString())
    const docRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', stringMonth)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      return data[stringDay] || []
    }
    return []
  }
)

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

// Update a task in Firestore
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ employeeId, month, day, taskId, taskData }) => {
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
    }
  }
)

// Delete a task from Firestore
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
      .addCase(addTask.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const { taskId, taskData } = action.payload
        const existingTask = state.data.find((task) => task.id === taskId)
        if (existingTask) {
          Object.assign(existingTask, taskData)
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload)
      })
  },
})

export default taskSlice.reducer
