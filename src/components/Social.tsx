import React, { useState } from "react";
import User from "../assets/User.svg";
import Plus from "../assets/Plus.svg";
import "./Social.css";

export const Social = () => {
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");

  const handlePlusClick = () => setShowInput(true);
  const handleBlur = () => setShowInput(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewName(e.target.value);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newName.trim()) {
      alert(`입력된 이름: ${newName}`);
      setNewName("");
      setShowInput(false);
    } else if (e.key === "Escape") {
      setShowInput(false);
      setNewName("");
    }
  };

  return (
    <div className="Social-all">
      <div className="Social-top">
        <img src={User} alt="User" className="UserIcon" />

        <div className="Social__title">social</div>

        <div className="PlusWrapper">
          {!showInput ? (
            <img
              src={Plus}
              alt="Plus"
              className="PlusIcon"
              onClick={handlePlusClick}
            />
          ) : (
            <input
              className="FloatingInput"
              type="text"
              placeholder="이름 입력"
              value={newName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              autoFocus
            />
          )}
        </div>
      </div>

      <div className="Social-texts">
        <div className="Social__name">
          <div className="Social__name-each">일길동</div>
          <div className="Social__name-each">이길동</div>
          <div className="Social__name-each">삼길동</div>
          <div className="Social__name-each">사길동</div>
          <div className="Social__name-each">오길동</div>
        </div>
      </div>
    </div>
  );
};
