import React from "react";
import WeekCalendar from "../components/WeekCalendar";
import TimeSlotScheduler from "../components/TimeSlotScheduler";

const CalendarPage = () => {
  return (
    <div>
      <WeekCalendar />

      {/* 간격을 두기 위해 여기에 공간 추가 */}
      <div style={{ margin: "20px" }}></div>

      <TimeSlotScheduler />
    </div>
  );
};

export default CalendarPage;
