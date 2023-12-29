// MenuModal.js
import React from "react";
import Modal from "react-modal";
import CalendarColorChangeButton from "./CalendarColorChangeButton";
import FontChangeButton from "./FontChangeButton";

Modal.setAppElement("#root"); // Set the root element for accessibility

const MenuModal = ({ isOpen, onRequestClose, onApplyFont, onApplyColor }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Menu Modal"
    >
      <h3>Menu</h3>
      <h4>색상 변경</h4>
      <CalendarColorChangeButton
        colors={["red", "blue", "yellow", "green", "black", "white"]}
        onChangeColor={(color) => {
          console.log(`색상 변경: ${color}`);
        }}
      />

      <h4>폰트 변경</h4>
      <FontChangeButton
        onChangeFontStyle={(font) => {
          console.log(`폰트 변경: ${font}`);
        }}
      />

      <button onClick={onApplyColor}>색상 확정</button>
      <button onClick={onApplyFont}>폰트 확정</button>
      <button onClick={onRequestClose}>닫기</button>
    </Modal>
  );
};

export default MenuModal;
