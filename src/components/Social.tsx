import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../assets/User.svg";
import Plus from "../assets/Plus.svg";
import "./Social.css";

export const Social = () => {
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const navigate = useNavigate();

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

  const friendNames = ["일길동", "이길동", "삼길동", "사길동", "오길동"];

  const handleNameClick = (name: string) => {
    if (selectedName === name) {
      const newClickCount = clickCount + 1;
      setClickCount(newClickCount);
      if (newClickCount === 2) {
        navigate("/friend");
        setClickCount(0);
      }
    } else {
      setSelectedName(name);
      setClickCount(1);
    }
  };

  const handleUnfollow = (e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 버블 방지
    setSelectedName(null);
    setClickCount(0);
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
          {friendNames.map((name) => (
            <div
              key={name}
              className="Social__name-row"
              onClick={() => handleNameClick(name)}
            >
              <div
                className={
                  "Social__name-each" +
                  (selectedName === name ? " Social__name-each--selected" : "")
                }
              >
                {name}
              </div>
              {selectedName === name && (
                <span className="UnfollowText" onClick={handleUnfollow}>
                  팔로우 취소
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
