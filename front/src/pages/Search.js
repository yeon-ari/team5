import React, { useState } from 'react';
import Modal from 'react-modal';

const SearchPopup = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // 검색 결과와 검색어 초기화
    setSearchResults([]);
    setSearchTerm('');
  };

  const performSearch = () => {
    // 검색 로직을 수행하고 결과를 가져오는 함수
    const fakeResults = generateFakeResults(searchTerm);

    // 검색 결과를 상태에 저장
    setSearchResults(fakeResults);

    // 모달 열기
    openModal();
  };

  const generateFakeResults = (term) => {
    // 가상의 검색 결과를 생성하여 반환
    return term
      ? [
          '검색 결과 1: ' + term,
          '검색 결과 2: ' + term,
          '검색 결과 3: ' + term,
        ]
      : [];
  };

  const displaySearchResults = () => {
    // 검색 결과를 화면에 표시
    return searchResults.length > 0 ? (
      searchResults.map((result, index) => <div key={index}>{result}</div>)
    ) : (
      <div>검색할 결과 없음</div>
    );
  };

  return (
    <div>
      {/* 검색어 입력란 */}
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 검색 버튼 */}
      <button onClick={performSearch}>검색</button>

      {/* 검색 결과 모달 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="검색 결과 팝업"
      >
        <h2>검색 결과</h2>
        {displaySearchResults()}

        {/* 닫기 버튼 */}
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default SearchPopup;
