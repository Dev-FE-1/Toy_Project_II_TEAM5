import { db } from './firebaseConfig.js'
import { doc, setDoc } from 'firebase/firestore'

// 특정 날짜와 시간으로 타임스탬프를 생성하는 함수
function getTimestampFromDate(year, month, day, hour, minute = 0) {
  const date = new Date(year, month - 1, day, hour, minute)
  return date.getTime() // 밀리초 단위의 타임스탬프 반환
}

// 예시 데이터
const month = {
  workTimeTable: [
    // 8월 1일
    {
      workIn: getTimestampFromDate(2024, 8, 1, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 1, 18, 0),
      Objection: ['이의있음'],
    },
    // 8월 2일
    {
      workIn: getTimestampFromDate(2024, 8, 2, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 2, 19, 0),
      Objection: ['이의있음'],
    },
    // 8월 3일 (토요일)
    { workIn: null, workOut: null, Objection: [] },
    // 8월 4일 (일요일)
    { workIn: null, workOut: null, Objection: [] },
    // 8월 5일
    {
      workIn: getTimestampFromDate(2024, 8, 5, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 5, 18, 30),
      Objection: ['이의있음'],
    },
    // 8월 6일
    {
      workIn: getTimestampFromDate(2024, 8, 6, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 6, 20, 0),
      Objection: ['이의있음'],
    },
    // 8월 7일
    {
      workIn: getTimestampFromDate(2024, 8, 7, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 7, 18, 0),
      Objection: ['이의있음'],
    },
    // 8월 8일
    {
      workIn: getTimestampFromDate(2024, 8, 8, 9, 0),
      workOut: getTimestampFromDate(2024, 8, 8, 19, 0),
      Objection: ['이의있음'],
    },
  ],
}

/*예시 데이터 출력
data.workTimeTable.forEach((entry) => {
  console.log("출근 시간:", new Date(entry.workIn).toLocaleString());
  console.log("퇴근 시간:", new Date(entry.workOut).toLocaleString());
  console.log("이의 사항:", entry.Objection.join(", "));
})*/

// Firestore에 데이터 추가 함수
async function uploadAttendanceData() {
  const empId = 'Zrghj2Jf3CVwQ7jSOmjCXYBBlek1' // 사원번호
  const monthDocId = '8' // 문서 ID

  try {
    // Firestore에 데이터 삽입
    const docRef = doc(db, 'EMPLOYEES', empId, 'ATTENDENCE', monthDocId)
    await setDoc(docRef, month, { merge: true })
    console.log('데이터가 성공적으로 삽입되었습니다.')
  } catch (error) {
    console.error('데이터 삽입 중 오류 발생:', error)
  }
}

uploadAttendanceData()
