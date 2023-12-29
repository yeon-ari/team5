// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FriendAddPage from './pages/FriendAddPage';
import FriendListPage from './pages/FriendListPage';
import CalendarPage from './pages/CalendarPage';
import CalendarMatchPage from './pages/CalendarMatchPage';
import CreateRoomPage from './pages/CreateRoomPage';
import RoomListPage from './pages/RoomListPage';

function App() {
  const [currentPage, setCurrentPage] = useState('FriendAddPage');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'FriendAddPage':
        return <FriendAddPage />;
      case 'FriendListPage':
        return <FriendListPage />;
      case 'CalendarPage':
        return <CalendarPage />;
      case 'CalendarMatchPage':
        return <CalendarMatchPage />;
      case 'CreateRoomPage':
        return <CreateRoomPage />;
      case 'RoomListPage':
        return <RoomListPage/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      {renderPage()}
      <Footer onPageChange={changePage} />
    </div>
  );
}

export default App;


