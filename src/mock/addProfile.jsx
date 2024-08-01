import { db } from '@firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export const addProfile = async (uid) => {
  const userDocRef = doc(db, uid, 'profile')
  try {
    await setDoc(userDocRef, newProfile)
    alert('Profile updated successfully')
  } catch (error) {
    console.error('Error updating profile:', error.message)
  }
}

const newProfile = {
  name: 'sumin lee',
  email: 'sumin@revive.com',
}
