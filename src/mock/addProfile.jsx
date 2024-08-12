import { db } from '@firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export const addProfile = async (uid) => {
  const userDocRef = doc(db, 'PROFILES', uid)
  try {
    await setDoc(userDocRef, newProfile)
    alert('Profile updated successfully')
  } catch (error) {
    console.error('Error updating profile:', error.message)
  }
}

const newProfile = {
  name: 'x',
  email: 'x@revive.com',
  position1: 'Programmer',
  position2: 'Developer',
  isOnline: true,
  date: '24/05/20',
  profile: 'imagesUrl',
}
