import { useEffect, useRef, useState } from "react";
import instance from "../apis/instance"; // axios 인스턴스 경로 확인 필요
import Profile from "../assets/profile.svg";
import X from "../assets/chat-x.svg";
import Send from "../assets/send.svg";
import "./Chat.css";

type Message = {
  sender: "me" | "other";
  text: string;
};

type Props = {
  onClose: () => void;
  cardId: number;
};

export const Chat = ({ onClose, cardId }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "other", text: "안녕하세요, 무엇을 도와드릴까요?" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!inputText.trim() || isSending) return;

    const newMessage: Message = { sender: "me", text: inputText };
    setMessages((prev) => [...prev, newMessage]);
    setIsSending(true);

    try {
      const response = await instance.post<{ response: string }>(
        `/card/${cardId}/chat`,
        { message: inputText }
      );

      setMessages((prev) => [
        ...prev,
        { sender: "other", text: response.data.response },
      ]);
    } catch (error) {
      console.error("채팅 전송 실패:", error);
    } finally {
      setIsSending(false);
      setInputText("");
    }
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
            placeholder={isSending ? "전송 중..." : "메시지를 입력하세요..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isSending}
          />
          <div
            className="chat-send-icon-container"
            onClick={handleSend}
            style={{
              pointerEvents: isSending ? "none" : "auto",
              opacity: isSending ? 0.6 : 1,
            }}
          >
            <img src={Send} className="chat-send-icon" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
