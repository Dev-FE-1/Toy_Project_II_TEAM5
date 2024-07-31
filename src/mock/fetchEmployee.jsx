import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export const fetchEmployee = async () => {
  const userDocRef = collection(db, 'EMPLOYEE', '1', 'PROFILE')
  const docSnap = await getDocs(userDocRef)
  const employeesList = docSnap.docs.map((doc) => ({
    ...doc.data(),
  }))
  console.log('list', employeesList)

  return employeesList
}
