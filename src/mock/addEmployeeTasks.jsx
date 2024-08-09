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

    let completion = 0
    if (status === '진행중') {
      completion = Math.floor(Math.random() * 81) + 10
    } else if (status === '완료함') {
      completion = 100
    } else if (status === '취소됨') {
      completion = 0
    }

    const newTask = {
      completion,
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
