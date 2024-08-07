import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchEmployeeTasks } from '@mock/fetchEmployeeTasks'
import addEmployeeTasks from '@mock/addEmployeeTasks'
import { updateEmployeeTask } from '@mock/updateEmployeeTasks'
import deleteEmployeeTasks from '@mock/deleteEmployeeTasks'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (employeeId) => {
  return await fetchEmployeeTasks(employeeId)
})

export const addTask = createAsyncThunk('tasks/addTask', async (uid, taskData) => {
  const docId = await addEmployeeTasks(uid, taskData)
  return { id: docId, ...taskData, time: taskData.time.toISOString() }
})

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (employeeId, taskId, taskData) => {
    await updateEmployeeTask(employeeId, taskId, taskData)
    return { id: taskId, ...taskData, time: taskData.time.toISOString() }
  }
)

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (employeeId, taskId) => {
  await deleteEmployeeTasks(employeeId, taskId)
  return taskId
})

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.data = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.data.findIndex((task) => task.id === action.payload.id)
        if (index !== -1) {
          state.data[index] = action.payload
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload)
      })
  },
})

export default taskSlice.reducer
