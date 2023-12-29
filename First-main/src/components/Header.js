// Header.js// Header.js
// Header.jsimport React from 'react';import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSearch, FaCog, FaBars, FaBell } from "react-icons/fa";
import Search from "../pages/Search";
import Setting from "../pages/Setting";
import MenuPage from "../pages/MenuPage";
import Bell from "../pages/Bell";
import "./Header.css";

const Header = () => {
  return (
    <Router>
      <div className="navbar">
        {/* 왼쪽 상단 아이콘들 */}
        <div className="leftIcons">
          <Link to="/MenuPage" className="icon">
            <FaBars size={28} />
          </Link>

          <Link to="/Setting" className="icon">
            <FaCog size={28} />
          </Link>
        </div>

        {/* 가운데 텍스트 */}
        <div className="centerText">
          <span className="logoText">C a l V a c</span>
        </div>

        {/* 오른쪽 상단 아이콘들 */}
        <div className="rightIcons">
          <Link to="/Search" className="icon">
            <FaSearch size={28} />
          </Link>

          <Link to="/Bell" className="icon">
            <FaBell size={28} />
          </Link>
        </div>

        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/Bell" element={<Bell />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
