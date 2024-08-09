import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'

const deleteEmployeeTasks = async (employeeId, taskId) => {
  try {
    const taskRef = doc(db, 'EMPLOYEES', employeeId, 'TASKS', taskId)
    await deleteDoc(taskRef)
    console.log('Task deleted successfully')
  } catch (error) {
    console.error('Error deleting task:', error)
    throw error
  }
}

export default deleteEmployeeTasks
