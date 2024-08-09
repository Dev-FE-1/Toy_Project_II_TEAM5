import { db } from '@firebase/firebaseConfig'
import { doc, writeBatch } from 'firebase/firestore'
import { commutes } from './data'
import { format } from 'date-fns'

const addCommute = (uid) => {
  const batch = writeBatch(db)

  commutes.forEach((commute) => {
    const { date } = commute
    const formattedDate = format(date, 'yyyy-MM-dd')

    const docRef = doc(db, 'EMPLOYEES', uid, 'COMMUTES', formattedDate)

    batch.set(docRef, commute)
  })

  batch.commit()
  alert('추가완료')
}

export default addCommute
