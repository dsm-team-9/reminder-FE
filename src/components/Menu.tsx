import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

interface MenuProps {
  nickname?: string;
  isActivated?: boolean;
  isMyMuseum?: boolean;
  onCreateClick?: () => void; // 추가
}

export const Menu = ({
  nickname = "",
  isActivated,
  isMyMuseum,
  onCreateClick,
}: MenuProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isFriendDetail = pathname.includes("/homeDetail");
  const isMyPage = pathname === "/mypage";
  const isAntiquity = pathname.includes("/mypage/antiquity");

  const [title, setTitle] = useState("museum menu");

  useEffect(() => {
    if (isHome) {
      setTitle("museum menu");
    } else if (isFriendDetail || isMyPage || isAntiquity || isMyMuseum) {
      setTitle(`${nickname}'s museum`);
    } else {
      setTitle("museum menu");
    }
  }, [pathname, nickname, isMyMuseum]);

  const renderRight = () => {
    if (isMyPage || isAntiquity || isMyMuseum) {
      return (
        <div
          className="menu__right"
          onClick={onCreateClick} // 클릭 이벤트 연결
          style={{ cursor: "pointer" }}
        >
          제작하기
        </div>
      );
    }
    if (isFriendDetail) {
      return (
        <div className="menu__right">{isActivated ? "활성화" : "비활성화"}</div>
      );
    }
    return null;
  };

  const renderMiddle = () => {
    if (isAntiquity) {
      return (
        <div className="menu__middle">
          {isActivated ? "활성화" : "비활성화"}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="menu__bar">
      <div className="menu__container">
        <div className="menu__title-area">
          <div className="menu__title">{title}</div>
          {renderMiddle()}
        </div>
        {renderRight()}
      </div>
    </div>
  );
};
