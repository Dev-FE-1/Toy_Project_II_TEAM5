import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'
import { format } from 'date-fns'

const addEmployeeTasks = async (uid, taskData) => {
  try {
    const { time, task, status, division } = taskData
    const formattedDate = format(time, 'yyyy-MM-dd')
    const docRef = doc(db, 'EMPLOYEES', uid, 'TASKS', formattedDate)

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
    return formattedDate // 문서 ID로 사용
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}

export default addEmployeeTasks
