import "./Chat.css";
import Profile from "../assets/profile.svg";
import X from "../assets/chat-x.svg";
import Send from "../assets/send.svg";

export const Chat = () => {
  return (
    <>
      <div className="chat-all-container">
        <div className="chat-all">
          <div className="chat-top">
            <div className="chat-user">
              <img src={Profile} alt="profile illustration" />
              <div className="chat__user-name">충무공 이순신</div>
            </div>

            <div className="chat-x-img">
              <img src={X} alt="chat-x illustration" />{" "}
            </div>
          </div>

          <div className="chat-middle">
            <div className="chat-other-user-container">
              <div className="Chat-other-user">이순신</div>
            </div>

            <div className="chat-me-user-container">
              <div className="Chat-me-user">이순신</div>
            </div>
          </div>

          <div className="chat-bottom">
            <input type="text" className="chat-input"></input>
            <div className="chat-send-icon-container">
              <img
                className="chat-send-icon"
                src={Send}
                alt="send illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
