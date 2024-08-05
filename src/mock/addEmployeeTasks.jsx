import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'
import { format } from 'date-fns'

const addEmployeeTasks = async (uid, taskData) => {
  try {
    const { time, task, status, division } = taskData
    const formattedDate = format(time, 'yyyy-MM-dd-HH-mm')
    const randomId = Math.random().toString(36).substring(2, 15)
    const docId = `${formattedDate}-${randomId}`
    const docRef = doc(db, 'EMPLOYEES', uid, 'TASKS', docId)

    const newTask = {
      completion: 0,
      division,
      status,
      task,
      time: Timestamp.fromDate(time),
    }

    console.log('Adding task to Firestore:', newTask)
    await setDoc(docRef, newTask)
    console.log('Task added successfully')
    return docId // 문서 ID 반환
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}

export default addEmployeeTasks
