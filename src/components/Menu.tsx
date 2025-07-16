import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  const location = useLocation();
  const [myNickname, setMyNickname] = useState("내닉네임");
  const [friendNickname, setFriendNickname] = useState("친구닉네임");

  const [menuTitle, setMenuTitle] = useState("museum menu");

  useEffect(() => {
    if (location.pathname === "/") {
      // Assuming '/' is your homepage
      setMenuTitle("museum menu");
    } else if (location.pathname === "/friend-museum") {
      setMenuTitle(`${friendNickname}'s museum`);
    } else if (location.pathname === "/my") {
      setMenuTitle(`${myNickname}'s museum`);
    } else {
      setMenuTitle("museum menu");
    }
  }, [location.pathname, myNickname, friendNickname]);

  return (
    <>
      <div className="menu__bar">
        <div className="menu__container">
          <div className="menu__title">{menuTitle}</div>
        </div>
      </div>
    </>
  );
};
