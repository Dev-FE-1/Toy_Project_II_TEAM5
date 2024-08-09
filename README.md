# 💊 Revive

![Revive](/src/assets/Revive.png)

<br>

## 1. 개요

### 🧑‍🏫 프로젝트명

- 직원들을 위한 급여 및 업무 관리 플랫폼

### 👥 팀원 구성

<div align="center">

|                                                              **김수민**                                                              |                                                                **강호연**                                                                 |                                                               **최원지**                                                                |                                                            **이윤환**                                                            |                                                               **이동혁**                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/95954000?v=4" height=150 width=150> <br/> @ssuminii](https://github.com/ssuminii) | [<img src="https://avatars.githubusercontent.com/u/106394183?v=4" height=150 width=150> <br/> @KimPra2989](https://github.com/KimPra2989) | [<img src="https://avatars.githubusercontent.com/u/171234168?v=4" height=150 width=150> <br/> @wonjichoe](https://github.com/wonjichoe) | [<img src="https://avatars.githubusercontent.com/u/86473590?v=4" height=150 width=150> <br/> @unanbb](https://github.com/unanbb) | [<img src="https://avatars.githubusercontent.com/u/89085298?v=4" height=150 width=150> <br/> @LfromTheE](https://github.com/LfromTheE) |

</div>

### ⌨️ 스펙

- **프론트엔드**:
  - **React**: 사용자 인터페이스를 구축하는 데 사용되는 주요 라이브러리
  - **Redux-toolkit**: 상태 관리를 위해 사용, 더 간편한 코드 작성을 지원
  - **Styled-components**: CSS-in-JS 라이브러리로, 컴포넌트별 스타일링
  - **JavaScript (JS)**: 주요 프로그래밍 언어
  - **Vite**: 빠르고 효율적인 개발 환경을 위한 빌드 도구
- **백엔드**:
  - **Firebase**: 서버리스 백엔드 솔루션, 인증 및 데이터베이스 관리
- **데이터베이스**:
  - **Firebase Firestore**: NoSQL 클라우드 데이터베이스, 실시간 데이터 동기화 지원
- **배포 및 호스팅**:
  - **Firebase Hosting**: 빠르고 안전한 웹 호스팅 서비스
- **기타 도구**:
  - **ESLint**: 코드 품질 및 일관성을 위한 린팅 도구
  - **Prettier**: 코드 포맷터로, 코드 스타일 일관성 유지
  - **Figma**: 디자인 및 프로토타이핑 도구

### 🗓 프로젝트 기간

- 일정 : 7월 22일(월) ~ 8월 9일(금)

  - 프로젝트 발표 : 8/9 (금) 18:00 ~ 20:00

<br>

## 2. 폴더 구조

```
📦src
 ┣ 📂assets // 정적 파일들
 ┃ ┣ 📂employees
 ┃ ┣ 📂icons
 ┃ ┣ 📂lunch
 ┣ 📂components // 컴포넌트
 ┃ ┣ 📂Calendar //캘린더 합성 컴포넌트로 작성한 예시
 ┃ ┃ ┣ 📜Calendar-Days.jsx
 ┃ ┃ ┣ 📜Calendar-Navigation.jsx
 ┃ ┃ ┣ 📜Calendar-header.jsx
 ┃ ┃ ┣ 📜Calendar.jsx
 ┃ ┃ ┗ 📜Month-Selector.jsx
 ┃ ┣ 📂Constant
 ┃ ┣ 📂Container // 데이터 뿌려주던 컨테이너 컴포넌트
 ┃ ┃ ┗ 📜calendar-context.jsx
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┣ 📂List
 ┃ ┣ 📂Lunch
 ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📜FetchWeather.jsx
 ┃ ┃ ┣ 📜Help.jsx
 ┃ ┃ ┣ 📜Logo.jsx
 ┃ ┃ ┣ 📜NavItems.jsx
 ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┣ 📜SideNav.jsx
 ┃ ┃ ┣ 📜UserStatus.jsx
 ┃ ┃ ┗ 📜Weather.jsx
 ┃ ┣ 📂Payslip
 ┃ ┣ 📂Schedule
 ┃ ┣ 📂shared // 공통 컴포넌트들
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Flex.jsx
 ┃ ┃ ┣ 📜Loading.jsx
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┗ 📜ShadowyBox.jsx
 ┣ 📂firebase // 파이어베이스 초기화 파일
 ┣ 📂hooks // custom hooks
 ┃ ┣ 📜useAttandance.jsx
 ┃ ┣ 📜useAuthState.jsx
 ┃ ┣ 📜useCalendar.jsx
 ┣ 📂mock // 목 데이터
 ┣ 📂pages
 ┃ ┣ 📂home
 ┃ ┣ 📂not-found
 ┃ ┣ 📂salary-management
 ┃ ┣ 📂signin
 ┃ ┣ 📂task-management
 ┃ ┣ 📂test
 ┣ 📂reducers // 리듀서
 ┃ ┣ 📜salarySlice.js
 ┃ ┣ 📜taskSlice.js
 ┃ ┗ 📜userListSlice.js
 ┣ 📂styles // 공통 css 파일
 ┃ ┣ 📜Colors.jsx
 ┃ ┣ 📜GlobalStyles.jsx
 ┃ ┣ 📜Theme.jsx
 ┃ ┗ 📜shared.jsx
 ┣ 📂utils / 유틸리티 함수들
 ┃ ┣ 📜calcOverTime.js
 ┃ ┣ 📜isHoliday.js
 ┃ ┗ 📜setDateString.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜store.js
```

<br>

## 3. 주요 기능

### 1. Auth

![login](/src/assets/screenshot/login.png)

### 1.1. 로그인

- **기능 설명**: 사용자는 로그인을 통해 회원 페이지에 접근할 수 있습니다.

- **필요 기능**

  - 로그인 페이지 구현
  - 사용자 인증

### 1.2. 로그 아웃

- **기능 설명**: 사용자는 로그아웃을 통해 로그인을 종료합니다.
- **필요 기능**:

  - 로그아웃 UI 구현
  - 로그아웃 구현

  <br>

### 2. 캘린더를 통한 급여 관리 페이지 구현

![calander](/src/assets/screenshot/calander.png)

### 2.1. 캘린더를 통한 출퇴근 기록 확인

- **기능 설명**: 사용자는 날짜 별 출퇴근 시간을 바탕으로 계산된 해당 달의 급여 내역을 확인할 수 있습니다.
- **필요 기능**:
  - 데이터를 제공을 위한 컨테이너 컴포넌트 구현
  - 출퇴근 데이터를 가져오는 reducer 작성

### 2.2 출퇴근 정정 신청

- **기능 설명**: 사용자는 캘린더에 표시된 출퇴근, 연장근무 시간에 대해 정정 신청을 할 수 있습니다.
- **필요 기능**:
  - 정정 신청 내용 입력 폼 모달 구현
  - 내용 미입력시 신청 불가 기능 구현
  - 정정 신청 완료 또는 불가 팝업 창 구현
    ![reqeust](/src/assets/screenshot/request.png)
    ![request2](/src/assets/screenshot/request2.png)

### 2.3. 출퇴근 정정 신청 내역 표시 및 삭제

- **기능 설명**: 사용자는 급여 관리 페이지에서 일정을 추가, 삭제, 수정할 수 있습니다.
- **필요 기능**:
  - 정정 신청 내용 표시할 모달 구현
  - 정정 신청 내역 표시
  - 정정 신청 삭제 기능 구현
  - 결제 완료된 항목은 삭제 불가 기능 구현
    ![correction](/src/assets/screenshot/correction.png)
    ![correctionDelete](/src/assets/screenshot/correctionDelete.png)
    ![correctionDelete2](/src/assets/screenshot/correctionDelete2.png)

<br>

### 3. 캘린더를 통한 업무 확인 페이지 구현

### 3.1. 오늘의 할 일 확인

- **기능 설명**: 사용자는 날짜를 바탕으로 오늘의 할 일을 확인할 수 있습니다.
- **필요 기능**:

  - 데이터 제공을 위한 컨테이너 컴포넌트 구현
  - 업무 데이터를 가져오는 reducer 작성

### 3.2. 업무 추가, 삭제, 수정 기능

- **기능 설명**: 사용자는 캘린더 페이지에서 업무를 확인, 추가, 삭제, 수정하여 관리할 수 있습니다.
- **필요 기능**:
  - 캘린더 페이지 구현
  - 업무 추가, 삭제, 수정 기능 구현
  - 업무 파이어베이스에 저장 및 표시

### 3.3. 저장한 일정 확인

- **기능 설명**: 사용자는 캘린더에서 저장된 일정을 확인할 수 있으며, 일정이 있는 경우 다른 일정과 구분되어 표시됩니다.
- **필요 기능**:
  - 데이터 제공을 위한 컨테이너 컴포넌트 구현
  - 업무 데이터를 가져오는 reducer 작성
  - 일정이 있는 날짜와 없는 날짜 구분 표시
  - 일정 상세 보기 기능 구현

<br>

### 4. 다크모드 구현

- **기능 설명:** 사용자는 다크모드 버튼을 눌러 다크모드 <-> 라이트모드를 변환할 수 있습니다.
- **필요 기능:**

  - 라이트 모드와 다크 모드 간의 전환 버튼
  - 사용자의 다크 모드 설정 상태를 저장 및 불러오기
  - 다크 모드와 라이트 모드에 따라 UI의 배경색, 텍스트 색상 등 스타일 변경
    ![dark](/src/assets/screenshot/dark.png)

<br>

### 5. 날씨 기능 구현

- **기능 설명**: 사용자는 SideBar에 있는 날씨 컴포넌트를 통해 현재 자신의 지역의 날씨 정보를 확인할 수 있습니다.
- **필요 기능**:
  - 외부 API를 호출하여 현재 날씨 정보를 가져오기
  - 사용자 위치 받아오기
  - 날씨 데이터를 가져오는 동안 로딩 메시지 표시
  - 날씨 데이터를 가져오는 중 오류가 발생할 경우 사용자에게 오류 메시지를 표시
    ![light](/src/assets/screenshot/light.png)

<br>

### 설치

---

```jsx
$ npm install
$ npm install firebase
```

### 실행

---

```jsx
$ npm run dev
```

### 문서

---

[주요 기능 정의서](https://www.notion.so/1f84c8be71304311993af1f73a56b4f7)
