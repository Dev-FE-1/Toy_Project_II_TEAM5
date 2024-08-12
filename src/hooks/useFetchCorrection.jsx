import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@firebase/firebaseConfig'

function useFetchCorrections() {
  const [correctionHistory, setCorrectionHistory] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCorrections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'corrections'))
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setCorrectionHistory(data)
      } catch (error) {
        console.error('Error getting documents: ', error)
        setError(error)
      }
    }

    fetchCorrections()
  }, [])

  return { correctionHistory, setCorrectionHistory, error }
}

export default useFetchCorrections
