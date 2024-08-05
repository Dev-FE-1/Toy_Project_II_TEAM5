import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function fetchEmployeeTasks(employeeId) {
  const tasksRef = collection(db, 'EMPLOYEES', employeeId, 'TASKS')
  const taskSnapshot = await getDocs(tasksRef)

  const tasks = taskSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    time: doc.data().time.toDate(),
  }))

  return tasks
}
