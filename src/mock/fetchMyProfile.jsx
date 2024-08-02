import { db } from '@firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const fetchMyProfile = async (uid) => {
  try {
    const userDocRef = doc(db, 'PROFILES', uid)

    const profile = await getDoc(userDocRef)

    return profile.data()
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchMyProfile
