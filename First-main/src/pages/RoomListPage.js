import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoomListPage = ({ rooms }) => {
  return (
    <div>
      <div className="room-list-page">
        <h3 style={{ fontSize: '38px' }}>방 목록</h3>
        {!rooms || rooms.length === 0 ? (
          <p>방이 없습니다.</p>
        ) : (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <h4>{room.name}</h4>
                <p>{room.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RoomListPage;


