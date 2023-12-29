import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const WeekCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [editedEvent, setEditedEvent] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setNewEventTitle("");
    setAddEventModalOpen(true);
  };

  const handleEventClick = (info) => {
    setEditedEvent(info.event);
    setNewEventTitle(info.event.title);
    setAddEventModalOpen(true);
  };

  const handleEventRemove = (info) => {
    const isConfirmed = window.confirm("정말로 일정을 삭제하시겠습니까?");
    if (isConfirmed) {
      const updatedEvents = events.filter((event) => event !== info.event);
      setEvents(updatedEvents);
    }
  };

  const handleAddEvent = () => {
    if (newEventTitle && selectedDate) {
      const newEvent = {
        title: newEventTitle,
        start: selectedDate,
      };

      if (editedEvent) {
        // If editing an existing event, remove the old one and add the updated one
        const updatedEvents = events.filter((event) => event !== editedEvent);
        setEvents([...updatedEvents, newEvent]);
        setEditedEvent(null);
      } else {
        // If adding a new event, just add it to the events array
        setEvents([...events, newEvent]);
      }

      setAddEventModalOpen(false);
      setNewEventTitle("");
      setSelectedDate(null);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>

      <div
        style={{ overflowX: "auto", maxWidth: "100%", marginBottom: "50px" }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,dayGridMonth",
          }}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventRemove={handleEventRemove}
          editable={true}
        />
      </div>

      {isAddEventModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>{editedEvent ? "일정 수정" : "새 일정 추가"}</h3>
            <label>
              제목:
              <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
              />
            </label>
            <button onClick={handleAddEvent}>
              {editedEvent ? "수정" : "추가"}
            </button>
            <button onClick={() => setAddEventModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekCalendar;
