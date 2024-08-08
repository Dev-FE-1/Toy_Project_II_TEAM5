import { db } from '@firebase/firebaseConfig'
import { collection, getDocs, query, Timestamp, where } from 'firebase/firestore'

const fetchCommutesByMonth = async (uid, year, month) => {
  const monthStart = new Date(year, month - 1, 1)
  const monthEnd = new Date(year, month, 0)

  const startTimestamp = Timestamp.fromDate(monthStart)
  const endTimestamp = Timestamp.fromDate(monthEnd)

  try {
    const q = query(
      collection(db, 'EMPLOYEES', uid, 'COMMUTES'),
      where('date', '>=', startTimestamp),
      where('date', '<=', endTimestamp)
    )

    const querySnapshot = await getDocs(q)

    const result = querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
      }))
      .map(({ date, start, end }) => ({
        date: new Timestamp(date.seconds, 0).toDate(),
        start: new Timestamp(start.seconds, 0).toDate(),
        end: new Timestamp(end.seconds, 0).toDate(),
      }))

    console.log(result)
    return result
  } catch (error) {
    console.error(`Error fetching ${year}-${month} commutes:`, error)
    throw error
  }
}

export default fetchCommutesByMonth
