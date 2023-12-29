import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeSlotScheduler = () => {
  const [selectedTime, setSelectedTime] = useState(""); // 선택된 시간대
  const [scheduleContent, setScheduleContent] = useState("");
  const [scheduleTitle, setScheduleTitle] = useState(""); // 추가된 부분: 일정 제목
  const [selectedDate, setSelectedDate] = useState(null); // 추가된 부분: 선택된 날짜

  const handleAddSchedule = () => {
    if (!selectedDate) {
      alert("날짜를 선택하세요.");
      return;
    }

    // 여기서는 간단하게 console.log로 일정을 출력합니다.
    console.log(
      `일정 추가 - ${selectedDate.toDateString()} - ${selectedTime} - ${scheduleTitle} - ${scheduleContent}`
    );
    // 추가한 내용 초기화
    setSelectedTime("");
    setScheduleTitle("");
    setScheduleContent("");
    setSelectedDate(null);
  };

  // 시간대 선택 옵션
  const timeOptions = Array.from({ length: 24 }, (_, index) => index);

  // 스타일 객체 정의
  const style = {
    fontSize: "24px",
  };

  // 간격을 위한 스타일 객체 정의
  const spacerStyle = {
    height: "23px",
  };

  return (
    <div className="time-slot-scheduler">
      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          날짜 선택:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="날짜 선택"
          />
        </label>
      </div>

      <div className="spacer" style={spacerStyle}></div>

      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          시간대:
          <select
            className="time-selector"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">시간대 선택</option>
            {timeOptions.map((hour) => (
              <option key={hour} value={hour}>
                {`${String(hour).padStart(2, "0")}:00`}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="spacer" style={spacerStyle}></div>

      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          일정 제목:
          <input
            type="text"
            className="title-input"
            style={style}
            value={scheduleTitle}
            onChange={(e) => setScheduleTitle(e.target.value)}
          />
        </label>
      </div>

      <div className="spacer" style={spacerStyle}></div>

      <div className="scheduler-row">
        <label className="scheduler-label" style={style} fontSize={24}>
          일정 내용:
          <input
            type="text"
            className="schedule-input"
            style={style}
            value={scheduleContent}
            onChange={(e) => setScheduleContent(e.target.value)}
          />
        </label>
      </div>

      <button
        className="add-schedule-button"
        style={style}
        onClick={handleAddSchedule}
        fontSize={24}
      >
        일정 추가
      </button>
    </div>
  );
};

export default TimeSlotScheduler;
