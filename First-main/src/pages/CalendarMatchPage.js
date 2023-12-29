import React, { useState, useEffect } from "react";
import WeekCalendar from "../components/WeekCalendar";
import RoomListPage from "./RoomListPage";

const CalendarMatchPage = ({ selectedRoom, onRoomSelect }) => {
  const [selectedRoomCalendar, setSelectedRoomCalendar] = useState(null);

  useEffect(() => {
    if (!selectedRoom) {
      const dummyCalendar = Array.from({ length: 9 }, () => "가능 시간");
      setSelectedRoomCalendar(dummyCalendar);
    }
  }, [selectedRoom]);

  return (
    <div>
      <h1 style={{ fontSize: "38px" }}>일정 맞추기 페이지</h1>
      <div style={{ display: "flex", gap: "38px" }}>
        {/* Your Calendar */}
        <div>
          <h2>나의 캘린더</h2>
          {selectedRoomCalendar ? (
            <>
              <WeekCalendar />
            </>
          ) : (
            <p>가능 시간</p>
          )}
        </div>

        {/* Selected Room Calendar */}
        <div style={{ marginBottom: "10px" }}>
          <h2>{selectedRoom ? `${selectedRoom}의 캘린더` : "가능 시간 "}</h2>
          {selectedRoomCalendar ? (
            <>
              <WeekCalendar />
            </>
          ) : (
            <>
              <p>멤버 일정</p>
              <button onClick={onRoomSelect}>
                {selectedRoom ? "다른 방 선택" : "방 선택"}
              </button>
            </>
          )}
        </div>

        {/* Room List on the Right */}
        <div>
          <RoomListPage />
          <button>방 선택</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarMatchPage;
