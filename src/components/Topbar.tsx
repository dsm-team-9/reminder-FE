import "./Topbar.css";

export const Topbar = () => {
  return (
    <>
      <div className="topbar__bar">
        <div className="topbar__container">
          <div className="topbar__title">Remind</div>

          <div className="topbar__texts">
            <div className="topbar__text">Mypage</div>
            <div className="topbar__text">Home</div>
            <div className="topbar__text">Conversaion</div>
          </div>

          <div className="topbar__user">홍길동님</div>
        </div>
      </div>
    </>
  );
};
