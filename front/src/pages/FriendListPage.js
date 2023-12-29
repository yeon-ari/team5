import { React, useState, useEffect }from 'react';
import axios from 'axios';

const FriendListPage = ({ onFriendSelect }) => {
  const [friendsList, setFriendsList] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // match 객체를 통해 URL에서 userId 추출
    const match = window.location.pathname.match(/\/MenuPage\/([^/]+)/);
    if (match) {
      setUserId(match[1]);
    }
  }, []); // 한 번만 실행되도록 빈 배열을 전달

  useEffect(() => {
    axios.get(`http://localhost:8000/friends/${userId}`)
      .then((res) => {
        console.log(res);
        setFriendsList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  return (
    <div>
      <h3 style={{ fontSize: '38px' }}>친구 목록</h3>
      {friendsList.length === 0 ? (
        <p>친구가 없습니다.</p>
      ) : (
        <ul>
          {friendsList.map((friend) => (
            <li key={friend.id} onClick={() => onFriendSelect(friend.id)}>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendListPage;
