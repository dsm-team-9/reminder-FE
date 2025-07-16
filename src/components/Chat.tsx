import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Profile from "../assets/profile.svg";
import X from "../assets/chat-x.svg";
import Send from "../assets/send.svg";

type Message = {
  sender: "me" | "other";
  text: string;
};

type Props = {
  onClose: () => void;
};

export const Chat = ({ onClose }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "other", text: "안녕하세요, 무엇을 도와드릴까요?" },
  ]);
  const [inputText, setInputText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = { sender: "me", text: inputText };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "other", text: "알겠습니다. 더 설명드릴게요!" },
      ]);
    }, 1000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-all-container">
      <div className="chat-all">
        <div className="chat-top">
          <div className="chat-user">
            <img src={Profile} alt="profile" />
            <div className="chat__user-name">충무공 이순신</div>
          </div>
          <div className="chat-x-img" onClick={onClose}>
            <img src={X} alt="close chat" />
          </div>
        </div>

        <div className="chat-middle">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.sender === "me"
                  ? "chat-me-user-container"
                  : "chat-other-user-container"
              }
            >
              <div
                className={
                  msg.sender === "me" ? "Chat-me-user" : "Chat-other-user"
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="chat-bottom">
          <input
            type="text"
            className="chat-input"
            placeholder="메시지를 입력하세요..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <div className="chat-send-icon-container" onClick={handleSend}>
            <img src={Send} className="chat-send-icon" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
