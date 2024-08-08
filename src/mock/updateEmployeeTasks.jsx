import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'

export const updateEmployeeTask = async (employeeId, taskId, taskData) => {
  try {
    const taskRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', taskId)
    await updateDoc(taskRef, taskData)
    console.log('Task updated successfully')
  } catch (error) {
    console.error('Error updating task:', error)
    throw error
  }
}
