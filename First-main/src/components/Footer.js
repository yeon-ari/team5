// Footer.js

import React from "react";
import {
  FaUser,
  FaList,
  FaCalendar,
  FaCalendarCheck,
  FaPlusSquare,
  FaBed,
} from "react-icons/fa";
import "./Footer.css";

const Footer = ({ onPageChange }) => {
  return (
    <div className="footer">
      <div className="icon" onClick={() => onPageChange("FriendAddPage")}>
        <FaUser size={30} />
        <span className="iconText">친구 추가</span>
      </div>

      <div className="icon" onClick={() => onPageChange("FriendListPage")}>
        <FaList size={30} />
        <span className="iconText">친구 목록</span>
      </div>

      <div className="icon" onClick={() => onPageChange("CalendarPage")}>
        <FaCalendar size={30} />
        <span className="iconText">캘린더</span>
      </div>

      <div className="icon" onClick={() => onPageChange("CalendarMatchPage")}>
        <FaCalendarCheck size={30} />
        <span className="iconText">일정 맞추기</span>
      </div>

      <div className="icon" onClick={() => onPageChange("CreateRoomPage")}>
        <FaPlusSquare size={30} />
        <span className="iconText">방 만들기</span>
      </div>

      <div className="icon" onClick={() => onPageChange("RoomListPage")}>
        <FaBed size={30} />
        <span className="iconText">방 목록</span>
      </div>
    </div>
  );
};

export default Footer;
