// src/components/Menu.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

interface MenuProps {
  nickname?: string;
}

export const Menu = ({ nickname = "" }: MenuProps) => {
  const location = useLocation();
  const [menuTitle, setMenuTitle] = useState("museum menu");

  useEffect(() => {
    if (location.pathname === "/") {
      setMenuTitle("museum menu");
    } else if (location.pathname.includes("/homeDetail")) {
      setMenuTitle(`${nickname}'s museum`);
    } else {
      setMenuTitle("museum menu");
    }
  }, [location.pathname, nickname]);

  return (
    <div className="menu__bar">
      <div className="menu__container">
        <div className="menu__title">{menuTitle}</div>
      </div>
    </div>
  );
};
