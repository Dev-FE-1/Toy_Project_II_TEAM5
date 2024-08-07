// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {
//   collection,
//   getDocs,
//   query,
//   orderBy,
//   updateDoc,
//   deleteDoc,
//   doc,
//   setDoc,
//   Timestamp,
// } from 'firebase/firestore'
// import { db } from '@firebase/firebaseConfig'
// import { format } from 'date-fns'

// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (employeeId) => {
//   const tasksRef = collection(db, 'EMPLOYEES', employeeId, 'TASKS')
//   const tasksQuery = query(tasksRef, orderBy('time', 'asc'))
//   const taskSnapshot = await getDocs(tasksQuery)

//   const tasks = taskSnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//     time: doc.data().time.toDate(),
//   }))

//   return tasks
// })

// export const addTask = createAsyncThunk('tasks/addTask', async (uid, taskData) => {
//   try {
//     const { time, task, status, division } = taskData
//     const formattedDate = format(time, 'yyyy-MM-dd-HH-mm')
//     const randomId = Math.random().toString(36).substring(2, 15)
//     const docId = `${formattedDate}-${randomId}`
//     const docRef = doc(db, 'EMPLOYEES', uid, 'TASKS', docId)

//     let completion = 0
//     if (status === '진행중') {
//       completion = Math.floor(Math.random() * 81) + 10
//     } else if (status === '완료함') {
//       completion = 100
//     } else if (status === '취소됨') {
//       completion = 0
//     }

//     const newTask = {
//       completion,
//       division,
//       status,
//       task,
//       time: Timestamp.fromDate(time),
//     }

//     console.log('Adding task to Firestore:', newTask)
//     await setDoc(docRef, newTask)
//     console.log('Task added successfully')
//     return docId // 문서 ID 반환
//   } catch (error) {
//     console.error('Error adding task:', error)
//     throw error
//   }
// })

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async (employeeId, taskId, taskData) => {
//     // await updateEmployeeTask(employeeId, taskId, taskData)
//     // return { id: taskId, ...taskData, time: taskData.time.toISOString() }
//     try {
//       const taskRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', taskId)
//       await updateDoc(taskRef, taskData)
//       console.log('Task updated successfully')
//       return { id: taskId, ...taskData, time: taskData.time.toISOString() }
//     } catch (error) {
//       console.error('Error updating task:', error)
//       throw error
//     }
//   }
// )

// export const deleteTask = createAsyncThunk('tasks/deleteTask', async (employeeId, taskId) => {
//   // await deleteEmployeeTasks(employeeId, taskId)
//   // return taskId
//   try {
//     const taskDocRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', taskId)
//     await deleteDoc(taskDocRef)
//     console.log('Task deleted successfully')
//     return taskId
//   } catch (error) {
//     console.error('Error deleting task:', error)
//     throw error
//   }
// })

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     data: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.status = 'pending'
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.status = 'fulfilled'
//         state.data = action.payload
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.status = 'rejected'
//         state.error = action.error.message
//       })
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.data.push(action.payload)
//       })
//       .addCase(updateTask.fulfilled, (state, action) => {
//         const index = state.data.findIndex((task) => task.id === action.payload.id)
//         if (index !== -1) {
//           state.data[index] = action.payload
//         }
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.data = state.data.filter((task) => task.id !== action.payload)
//       })
//   },
// })

// export default taskSlice.reducer
// taskSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@firebase/firebaseConfig'
import { collection, doc, getDocs, updateDoc, deleteDoc, addDoc } from 'firebase/firestore'

// Fetch tasks from Firestore
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ employeeId, month, day }) => {
    const tasks = []
    const querySnapshot = await getDocs(
      collection(db, 'EMPLOYEES', employeeId, 'TASKS', month, day)
    )
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() })
    })
    return tasks
  }
)

// Add a new task to Firestore
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ employeeId, month, day, taskData }) => {
    const docRef = await addDoc(
      collection(db, 'EMPLOYEES', employeeId, 'TASKS', month, day),
      taskData
    )
    return { id: docRef.id, ...taskData }
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
