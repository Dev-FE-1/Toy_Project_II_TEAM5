import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const daysInMonth = 31; 
  const firstDayOfMonth = 1; 

  const dummySchedules = {
    2: [{ type: '출근', time: '09:00', description: "" }, { type: '퇴근', time: '18:00' , description: ""}],
    3: [{ type: '출근', time: '09:00', description: "" }, { type: '퇴근', time: '18:00', description: "" }],
    4: [{ type: '출근', time: '09:00' , description: ""}, { type: '퇴근', time: '18:00', description: "" }],
    5: [{ type: '출근', time: '09:00', description: "" }, { type: '퇴근', time: '18:00' , description: ""}],
    9: [{ type: '출근', time: '09:00' , description: ""}, { type: '퇴근', time: '18:00' , description: ""}],
    10: [{ type: '출근', time: '09:00' , description: ""}, { type: '퇴근', time: '18:00', description: "" }],
    11: [{ type: 'Development' , description: ""}],
    12: [{ type: 'Edit file', description: "" }],
    13: [{ type: 'Note taking' , description: ""}],
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      days.push(<DayCell key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <DayCell key={day}>
          <DayNumber>{day}</DayNumber>
          <ScheduleList>
            {dummySchedules[day]?.map((schedule, index) => (
              <ScheduleItem key={index} type={schedule.type}>
                {schedule.type} {schedule.time}
              </ScheduleItem>
            ))}
          </ScheduleList>
        </DayCell>
      );
    }
    return days;
  };

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthYear>July, 2024</MonthYear>
        <MonthTitle>7월</MonthTitle>
        <MonthSelector>
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3">3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </MonthSelector>
      </CalendarHeader>
      <CalendarGrid>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}
        {renderCalendarDays()}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 60%;
  margin: 0 auto;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const MonthTitle = styled.h1`
  font-size: 24px;
  position: absolute; 
  left: 50%;
  transform: translateX(-50%);
  margin: 0; 
`;

const MonthSelector = styled.select`
  justify-content: space-between;
  align-items: center;
  padding: 10px; 
  font-weight: bold;
  font-size: 16px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  max-width: 7em;
  width: 100%; 
`;

const MonthYear = styled.h2`
  padding-top: 30px;
  font-size: 24px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  border: 1px solid #e9ecef;
`;

const DayHeader = styled.div`
  padding: 10px;

  border: 1px solid #e9ecef;
`;

const DayCell = styled.div`
  min-height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9ecef;
  background-color: #fff;
`;

const DayNumber = styled.div`
  font-size:1.5em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  justify-content: flex-end; 
  flex-grow: 1;
`;

const ScheduleItem = styled.div`
  padding: 2px 5px;
  margin-bottom: 2px;
  max-width: 70%;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* word-break: break-all; 
  overflow-wrap: break-word; */
  background-color: ${props => {
    switch(props.type) {
      case '출근': return '#FFA500';
      case '퇴근': return '#FF6347';
      case 'Development': return '#4682B4';
      case 'Edit file': return '#9370DB';
      case 'Note taking': return '#A9A9A9';
      default: return '#ccc';
    }
  }};
  color: #fff;
`;

export default Calendar;
