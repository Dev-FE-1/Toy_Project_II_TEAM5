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
    // 7월 1일
    {
      workIn: getTimestampFromDate(2024, 7, 1, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 1, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 2일
    {
      workIn: getTimestampFromDate(2024, 7, 2, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 2, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 3일
    {
      workIn: getTimestampFromDate(2024, 7, 3, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 3, 18, 30),
      Objection: ['이의있음'],
    },
    // 7월 4일
    {
      workIn: getTimestampFromDate(2024, 7, 4, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 4, 20, 0),
      Objection: ['이의있음'],
    },
    // 7월 5일
    {
      workIn: getTimestampFromDate(2024, 7, 5, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 5, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 6일 (토요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 7일 (일요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 8일
    {
      workIn: getTimestampFromDate(2024, 7, 8, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 8, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 9일
    {
      workIn: getTimestampFromDate(2024, 7, 9, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 9, 18, 30),
      Objection: ['이의있음'],
    },
    // 7월 10일
    {
      workIn: getTimestampFromDate(2024, 7, 10, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 10, 20, 0),
      Objection: ['이의있음'],
    },
    // 7월 11일
    {
      workIn: getTimestampFromDate(2024, 7, 11, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 11, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 12일
    {
      workIn: getTimestampFromDate(2024, 7, 12, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 12, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 13일 (토요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 14일 (일요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 15일
    {
      workIn: getTimestampFromDate(2024, 7, 15, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 15, 18, 30),
      Objection: ['이의있음'],
    },
    // 7월 16일
    {
      workIn: getTimestampFromDate(2024, 7, 16, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 16, 20, 0),
      Objection: ['이의있음'],
    },
    // 7월 17일
    {
      workIn: getTimestampFromDate(2024, 7, 17, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 17, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 18일
    {
      workIn: getTimestampFromDate(2024, 7, 18, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 18, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 19일
    {
      workIn: getTimestampFromDate(2024, 7, 19, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 19, 18, 30),
      Objection: ['이의있음'],
    },
    // 7월 20일 (토요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 21일 (일요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 22일
    {
      workIn: getTimestampFromDate(2024, 7, 22, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 22, 20, 0),
      Objection: ['이의있음'],
    },
    // 7월 23일
    {
      workIn: getTimestampFromDate(2024, 7, 23, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 23, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 24일
    {
      workIn: getTimestampFromDate(2024, 7, 24, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 24, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 25일
    {
      workIn: getTimestampFromDate(2024, 7, 25, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 25, 18, 0),
      Objection: ['이의있음'],
    },
    // 7월 26일
    {
      workIn: getTimestampFromDate(2024, 7, 26, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 26, 19, 0),
      Objection: ['이의있음'],
    },
    // 7월 27일 (토요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 28일 (일요일)
    { workIn: null, workOut: null, Objection: [] },
    // 7월 29일
    {
      workIn: getTimestampFromDate(2024, 7, 29, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 29, 18, 30),
      Objection: ['이의있음'],
    },
    // 7월 30일
    {
      workIn: getTimestampFromDate(2024, 7, 30, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 30, 20, 0),
      Objection: ['이의있음'],
    },
    // 7월 31일
    {
      workIn: getTimestampFromDate(2024, 7, 31, 9, 0),
      workOut: getTimestampFromDate(2024, 7, 31, 18, 0),
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
  const monthDocId = '7' // 문서 ID

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
