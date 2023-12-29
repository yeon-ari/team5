import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelpPage = () => {
  const history = useNavigate();

  // 뒤로 가기 함수
  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>도움말</h2>
      {/* 도움말 내용 */}
      
      {/* 뒤로 가기 버튼 */}
      <button onClick={goBack}>뒤로 가기</button>
    </div>
  );
};

export default HelpPage;

