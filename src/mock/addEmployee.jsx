import { doc, writeBatch } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'
import { employeeList } from './data'

export const addEmployee = () => {
  const batch = writeBatch(db)

  employeeList.forEach((employee) => {
    const docRef = doc(db, 'PROFILES', employee.id)
    batch.set(docRef, employee)
  })

  batch.commit()
  alert('추가완료')
}
