import User from "../assets/User.svg";
import Plus from "../assets/Plus.svg";
import "./Social.css";

export const Social = () => {
  return (
    <>
      <div className="Social-all">
        <div className="Social-top">
          <img src={User} alt="User illustration" />
          <div className="Social__title">Social</div>
          <img src={Plus} alt="Plus illustration" />
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
    </>
  );
};
