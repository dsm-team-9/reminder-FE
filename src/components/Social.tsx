import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../assets/User.svg";
import Plus from "../assets/Plus.svg";
import instance from "../apis/instance";
import "./Social.css";

interface User {
  id: number;
  name: string;
}

export const Social = () => {
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");
  const [friends, setFriends] = useState<User[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const navigate = useNavigate();

  const handlePlusClick = () => setShowInput(true);
  const handleBlur = () => setShowInput(false);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newName.trim()) {
      try {
        // 1. 사용자 검색
        const res = await instance.get("/auth/search", {
          params: { name: newName },
        });

        const result: User[] = res.data;
        const matched = result.find((user) => user.name === newName);

        if (matched) {
          // 2. 팔로우 요청
          await instance.post(`/auth/${matched.id}/follow`);
          // 3. 상태에 추가
          setFriends((prev) => [...prev, matched]);
          console.log(`팔로우 성공: ${matched.name}`);
        } else {
          console.log("사용자 없음");
        }
      } catch (err) {
        console.error("검색 또는 팔로우 실패", err);
      } finally {
        setNewName("");
        setShowInput(false);
      }
    } else if (e.key === "Escape") {
      setShowInput(false);
      setNewName("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewName(e.target.value);

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

  const handleUnfollow = async (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    try {
      await instance.delete(`/auth/${user.id}/follow`);
      setFriends((prev) => prev.filter((f) => f.id !== user.id));
      console.log(`언팔로우 성공: ${user.name}`);
    } catch (err) {
      console.error("언팔로우 실패", err);
    } finally {
      setSelectedName(null);
      setClickCount(0);
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
              placeholder="닉네임 입력"
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
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="Social__name-row"
              onClick={() => handleNameClick(friend.name)}
            >
              <div
                className={
                  "Social__name-each" +
                  (selectedName === friend.name
                    ? " Social__name-each--selected"
                    : "")
                }
              >
                {friend.name}
              </div>
              {selectedName === friend.name && (
                <span
                  className="UnfollowText"
                  onClick={(e) => handleUnfollow(e, friend)}
                >
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
