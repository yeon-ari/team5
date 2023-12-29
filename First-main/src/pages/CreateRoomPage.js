import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreateRoomPage = ({ friends = [], onCreateRoom, history }) => {
  const [selectedFriends, setSelectedFriends] = useState([]);

  // 친구를 선택 또는 해제할 때 호출되는 함수
  const toggleFriendSelection = (friendId) => {
    setSelectedFriends((prevSelectedFriends) => {
      // 이미 선택된 경우 선택 해제, 아닌 경우 선택 추가
      if (prevSelectedFriends.includes(friendId)) {
        return prevSelectedFriends.filter((id) => id !== friendId);
      } else {
        return [...prevSelectedFriends, friendId];
      }
    });
  };

  // 방 만들기 버튼을 눌렀을 때 호출되는 함수
  const handleCreateRoom = () => {
    // 만약 선택한 친구가 없으면 경고 메시지를 표시하고 함수 종료
    if (selectedFriends.length === 0) {
      alert("친구를 선택해주세요.");
      return;
    }

    // 선택한 친구들과 함께 방 정보를 생성
    const newRoom = {
      id: Date.now(), // 임의의 방 아이디 생성 (실제로는 서버에서 생성해야 함)
      name: `Room ${selectedFriends.join(", ")}`, // 예시: Room A, B, C
      description: "새로운 방입니다.", // 예시: 새로운 방
    };

    // 방을 생성하고 RoomListPage에 추가하는 함수 호출
    onCreateRoom(newRoom);

    // 방을 만든 후, 홈으로 이동
    history.push("/");
  };

  return (
    <div>
      <h2>방 만들기</h2>
      <div>
        <h3>친구 목록</h3>
        {friends.length === 0 ? (
          <p>친구가 없습니다.</p>
        ) : (
          <ul>
            {friends.map((friend) => (
              <li
                key={friend.id}
                onClick={() => toggleFriendSelection(friend.id)}
                style={{
                  cursor: "pointer",
                  fontWeight: selectedFriends.includes(friend.id)
                    ? "bold"
                    : "normal",
                }}
              >
                {friend.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleCreateRoom}>방 만들기</button>
      {selectedFriends.length === 0 && (
        <p style={{ color: "red", marginTop: "10px" }}>친구를 선택해주세요.</p>
      )}
    </div>
  );
};

export default CreateRoomPage;
