import React from 'react';
import styled from 'styled-components';

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #ddd;
  border: 1px solid #ddd;
`;

const CalendarCell = styled.div`
  background-color: white;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const CalendarHeader = styled(CalendarCell)`
  background-color: #f0f0f0;
  font-weight: bold;
`;

const Calendar = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <CalendarGrid>
      {daysOfWeek.map(day => (
        <CalendarHeader key={day}>{day}</CalendarHeader>
      ))}
      {days.map(day => (
        <CalendarCell key={day}>{day}</CalendarCell>
      ))}
    </CalendarGrid>
  );
};

export default Calendar;