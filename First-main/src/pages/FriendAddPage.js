
import React, { useState, useEffect } from 'react';
import './FriendAddPage.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

const FriendAddPage = ({ onAddFriend }) => {
  const [friendId, setFriendId] = useState('');
  const [friendPhoneNumber, setFriendPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // match 객체를 통해 URL에서 userId 추출
    const match = window.location.pathname.match(/\/MenuPage\/([^/]+)/);
    if (match) {
      setUserId(match[1]);
    }
  }, []); // 한 번만 실행되도록 빈 배열을 전달

  const handleAddFriend = () => {
    if (!friendId.trim() || !friendPhoneNumber.trim()) {
      setError('아이디와 전화번호를 모두 입력하세요.');
      return;
    }
    axios.post(`http://localhost:8000/addFriend/${userId}`, {
      friendId: friendId,
      phone: friendPhoneNumber
    })
      .then((res) => {
        setFriendId('');
        setFriendPhoneNumber('');
        setError(null);
      })
      .catch((error) => {
        setError('유효하지 않습니다. 다시 시도하세요.');
      });
  };
  

  return (
    <div>

      <h2>친구 추가 페이지</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          아이디:
          <input type="text" value={friendId} onChange={(e) => setFriendId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          전화번호:
          <input
            type="text"
            value={friendPhoneNumber}
            onChange={(e) => setFriendPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddFriend}>친구 추가</button>
    </div>
  );
};  

export default FriendAddPage;
