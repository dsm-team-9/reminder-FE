// src/components/Topbar.tsx
import { useLocation, useNavigate } from "react-router-dom";
import "./Topbar.css";

interface TopbarProps {
  username?: string;
}

export const Topbar = ({ username = "사용자" }: TopbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getColor = (path: string) =>
    location.pathname === path ? "#1C1F42" : "#5F6074";

  return (
    <div className="topbar__bar">
      <div className="topbar__container">
        <div className="topbar__title">Remind</div>

        <div className="topbar__texts">
          <div
            className="topbar__text"
            style={{ color: getColor("/my") }}
            onClick={() => navigate("/my")}
          >
            Mypage
          </div>
          <div
            className="topbar__text"
            style={{ color: getColor("/homePage") }}
            onClick={() => navigate("/homePage")}
          >
            Home
          </div>
          <div
            className="topbar__text"
            style={{ color: getColor("/chat") }}
            onClick={() => navigate("/chat")}
          >
            Conversation
          </div>
        </div>

        <div className="topbar__user">{username}님</div>
      </div>
    </div>
  );
};
