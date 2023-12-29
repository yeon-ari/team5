import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
const navigate = useNavigate(); // useNavigate hook

const [userId, setUserId] = useState('');

  const handleLogin = () => {
    const userData = {
      id: userId
    };

    axios.post('http://localhost:8000/login', userData)
      .then((res) => {
        if (res.data.loginSuccess) {
          console.log(`로그인 성공: ${userId}`);
          onLogin();
          // 로그인 성공 시 URL 변경
          navigate(`/MenuPage/${userId}`);
          return true;
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        console.error('로그인 중 에러:', error);
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="로그인 팝업">
      <h2>로그인</h2>

      <label>
        아이디:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>

      <button onClick={handleLogin}>로그인</button>
      <button onClick={onClose}>닫기</button>
    </Modal>
  );
};

const SignupModal = ({ isOpen, onClose, onSignup }) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = () => {
    const userData = {
      name: name,
      id: userId,
      phone: phoneNumber
    };
    axios.post('http://localhost:8000/users/register', userData)
    .then((res) => {
      if (res.data.registerSuccess) {
        alert(`회원가입 성공`);
        onSignup();
      } else {
        alert("회원가입 실패");
      }
    }).catch ((error) => {
      console.error('회원가입 중 에러:', error);
    })
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="회원가입 팝업"
    >
      <h2>회원가입</h2>

      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        아이디:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>

      <label>
        전화번호:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>

      <button onClick={handleSignup}>회원가입</button>
      <button onClick={onClose}>닫기</button>
    </Modal>
  );
};

const Setting = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openSetting = () => {
    setSettingOpen(true);
  };

  const closeSetting = () => {
    setSettingOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  return (
    <div>
      <button onClick={openSetting}>메뉴 열기</button>

      {/* Setting modal */}
      {isSettingOpen && (
        <Modal
          isOpen={isSettingOpen}
          onRequestClose={closeSetting}
          contentLabel="설정 팝업"
        >
          <h2>설정</h2>

          <button onClick={openLoginModal}>로그인</button>
          <button onClick={openSignupModal}>회원가입</button>

          <button onClick={closeSetting}>닫기</button>
        </Modal>
      )}

      {/* Login modal */}
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onLogin={() => {
            console.log("로그인 완료");
            closeLoginModal();
          }}
        />
      )}

      {/* Signup modal */}
      {isSignupModalOpen && (
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
          onSignup={() => {
            console.log("회원가입 완료");
            closeSignupModal();
          }}
        />
      )}
    </div>
  );
};

export default Setting;