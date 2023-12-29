// MenuPaUser
import React, { useState } from 'react';
import CalendarColorChangeButton from '../components/CalendarColorChangeButton.js';
import FontChangeButton from '../components/FontChangeButton';
import Modal from 'react-modal';

const Setting = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleOpenModal}
        style={{
          backgroundColor: '#ff6600',
          color: '#fff',
          fontSize: '20px',
          fontWeight: 'bold',
          padding: '15px 25px',
          borderRadius: '25px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h4 style={{ margin: '0' }}>설정 열기</h4>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="설정 팝업"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          },
          content: {
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '400px',
            margin: 'auto',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
          }
        }}
      >
        <h3>설정</h3>

        {/* 색상 변경 버튼 */}
        <h4>색상 변경</h4>
        <CalendarColorChangeButton
          colors={['red', 'blue', 'yellow', 'green', 'black', 'white']}
          onChangeColor={(color) => {
            console.log(`색상 변경: ${color}`);
          }}
        />

        {/* 폰트 변경 버튼 */}
        <h4>폰트 변경</h4>
        <FontChangeButton
          onChangeFontStyle={() => {
            console.log('폰트 변경');
          }}
        />

        {/* 팝업 닫기 버튼 */}
        <button onClick={handleCloseModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default Setting;
