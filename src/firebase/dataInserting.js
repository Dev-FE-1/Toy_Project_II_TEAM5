import { db } from './firebaseConfig.js'
import { doc, setDoc } from 'firebase/firestore'

// 특정 날짜와 시간으로 타임스탬프를 생성하는 함수
function getTimestampFromDate(year, month, day, hour, minute = 0) {
  const date = new Date(year, month - 1, day, hour, minute)
  return date.getTime() // 밀리초 단위의 타임스탬프 반환
}

// 예시 데이터
const month = {
  dayNum: 30,
  firstDay: 'SAT', // 2024년 6월 1일은 토요일
  overTime: 0,
  workTimeTable: [
    // 주말에는 빈 배열
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    // 평일 데이터
    {
      workIn: getTimestampFromDate(2024, 6, 3, 9, 0), // 2024년 6월 3일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 3, 18, 0), // 2024년 6월 3일 오후 6시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 4, 9, 0), // 2024년 6월 4일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 4, 19, 0), // 2024년 6월 4일 오후 7시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 5, 9, 0), // 2024년 6월 5일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 5, 18, 30), // 2024년 6월 5일 오후 6시 30분
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 6, 9, 0), // 2024년 6월 6일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 6, 20, 0), // 2024년 6월 6일 오후 8시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 7, 9, 0), // 2024년 6월 7일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 7, 18, 0), // 2024년 6월 7일 오후 6시
      Objection: ['이의있음'],
    },
    // 주말에는 빈 배열
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    // 평일 데이터
    {
      workIn: getTimestampFromDate(2024, 6, 10, 9, 0), // 2024년 6월 10일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 10, 19, 0), // 2024년 6월 10일 오후 7시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 11, 9, 0), // 2024년 6월 11일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 11, 18, 30), // 2024년 6월 11일 오후 6시 30분
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 12, 9, 0), // 2024년 6월 12일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 12, 20, 0), // 2024년 6월 12일 오후 8시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 13, 9, 0), // 2024년 6월 13일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 13, 18, 0), // 2024년 6월 13일 오후 6시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 14, 9, 0), // 2024년 6월 14일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 14, 19, 0), // 2024년 6월 14일 오후 7시
      Objection: ['이의있음'],
    },
    // 주말에는 빈 배열
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    // 평일 데이터
    {
      workIn: getTimestampFromDate(2024, 6, 17, 9, 0), // 2024년 6월 17일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 17, 18, 30), // 2024년 6월 17일 오후 6시 30분
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 18, 9, 0), // 2024년 6월 18일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 18, 20, 0), // 2024년 6월 18일 오후 8시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 19, 9, 0), // 2024년 6월 19일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 19, 18, 0), // 2024년 6월 19일 오후 6시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 20, 9, 0), // 2024년 6월 20일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 20, 19, 0), // 2024년 6월 20일 오후 7시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 21, 9, 0), // 2024년 6월 21일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 21, 18, 30), // 2024년 6월 21일 오후 6시 30분
      Objection: ['이의있음'],
    },
    // 주말에는 빈 배열
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    // 평일 데이터
    {
      workIn: getTimestampFromDate(2024, 6, 24, 9, 0), // 2024년 6월 24일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 24, 18, 0), // 2024년 6월 24일 오후 6시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 25, 9, 0), // 2024년 6월 25일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 25, 19, 0), // 2024년 6월 25일 오후 7시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 26, 9, 0), // 2024년 6월 26일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 26, 18, 30), // 2024년 6월 26일 오후 6시 30분
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 27, 9, 0), // 2024년 6월 27일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 27, 20, 0), // 2024년 6월 27일 오후 8시
      Objection: ['이의있음'],
    },
    {
      workIn: getTimestampFromDate(2024, 6, 28, 9, 0), // 2024년 6월 28일 오전 9시
      workOut: getTimestampFromDate(2024, 6, 28, 18, 0), // 2024년 6월 28일 오후 6시
      Objection: ['이의있음'],
    },
    // 주말에는 빈 배열
    {
      workIn: null,
      workOut: null,
      Objection: [],
    },
    {
      workIn: null,
      workOut: null,
      Objection: [],
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
  const monthDocId = '6' // 문서 ID

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
