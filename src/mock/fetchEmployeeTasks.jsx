import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function fetchEmployeeTasks(employeeId) {
  const tasksRef = collection(db, 'EMPLOYEES', employeeId, 'TASKS')
  const tasksQuery = query(tasksRef, orderBy('time', 'asc'))
  const taskSnapshot = await getDocs(tasksQuery)

  const tasks = taskSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    time: doc.data().time.toDate(),
  }))

  return tasks
}
