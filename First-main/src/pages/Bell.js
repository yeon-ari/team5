// Bell.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Bell = () => {
  const [isBellModalOpen, setBellModalOpen] = useState(false);
  const navigate = useNavigate();

  const openBellModal = () => {
    setBellModalOpen(true);
  };

  const closeBellModal = () => {
    setBellModalOpen(false);
  };

  const handleAcceptFriendRequest = (friendRequestId) => {
    // 친구 요청 수락 로직 처리
    console.log('Accepting friend request:', friendRequestId);
    // 추가적인 로직 수행 가능
    // 팝업을 닫을지 유지할지 여부를 결정할 수 있습니다.
    closeBellModal();
  };

  return (
    <div>
      {/* ... 다른 컴포넌트 및 레이아웃 */}
      {/* 알림 팝업 버튼 */}
      <button onClick={openBellModal}>알림</button>

      {/* 알림 팝업 */}
      <Modal
        isOpen={isBellModalOpen}
        onRequestClose={closeBellModal}
        contentLabel="알림 팝업"
      >
        <h2>알림 팝업</h2>

        {/* 친구 요청 수락 버튼 */}
        <button onClick={() => handleAcceptFriendRequest(/* 친구 요청 ID */)}>
          친구 요청 수락
        </button>

        {/* 다른 내용 추가 가능 */}
        <button onClick={closeBellModal}>닫기</button>
      </Modal>

    </div>
  );
};

export default Bell;


