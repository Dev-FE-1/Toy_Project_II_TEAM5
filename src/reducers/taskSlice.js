import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@firebase/firebaseConfig'
import { collection, doc, getDocs, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'

// Fetch tasks from Firestore
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ employeeId, month, day }) => {
    const tasks = []
    const querySnapshot = await getDocs(
      collection(db, 'EMPLOYEES', employeeId, 'TASKS', month, day)
    )
    querySnapshot.forEach((doc) => {
      console.log('Fetched Task:', { id: doc.id, ...doc.data() })
      tasks.push({ id: doc.id, ...doc.data() })
    })
    return tasks
  }
)

// Add a new task to Firestore
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ employeeId, month, day, taskData }) => {
    // Create a new task document with a unique integer ID for each day
    const collectionRef = collection(db, 'EMPLOYEES', employeeId, 'TASKS', month, day)

    // Get the highest existing task ID to determine the next available ID
    const querySnapshot = await getDocs(collectionRef)
    const taskIds = querySnapshot.docs.map((doc) => parseInt(doc.id, 10)).filter((id) => !isNaN(id))
    const newTaskId = taskIds.length > 0 ? Math.max(...taskIds) + 1 : 1

    // Create a reference to the new task document
    const newTaskRef = doc(collectionRef, newTaskId.toString())

    // Set the new task document with the provided data
    await setDoc(newTaskRef, taskData)

    return { id: newTaskId.toString(), ...taskData }
  }
)

// Update a task in Firestore
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ employeeId, month, day, taskId, taskData }) => {
    await updateDoc(doc(db, 'EMPLOYEES', employeeId, 'TASKS', month, day, taskId), taskData)
    return { taskId, taskData }
  }
)

// Delete a task from Firestore
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ employeeId, month, day, taskId }) => {
    await deleteDoc(doc(db, 'EMPLOYEES', employeeId, 'TASKS', month, day, taskId))
    return taskId
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
