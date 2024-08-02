import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore'
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

export async function addTaskToEmployee(employeeId, taskData) {
  const tasksRef = collection(db, 'EMPLOYEES', employeeId, 'TASKS')

  const newTask = {
    ...taskData,
    time: Timestamp.fromDate(new Date(taskData.time)),
  }

  try {
    const docRef = await addDoc(tasksRef, newTask)
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
    throw e
  }
}
