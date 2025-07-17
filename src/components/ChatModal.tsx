// components/ChatModal.tsx
import React, { useState } from "react";
import instance from "../apis/instance";

const ChatModal = ({ card, onClose }: { card: any; onClose: () => void }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const token = localStorage.getItem("accessToken");
      const res = await instance.post(
        `/card/${card.id}/chat`,
        {
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("전송 완료: " + res.data.response);
      setMessage("");
      onClose(); // 모달 닫기
    } catch (e) {
      console.error("메시지 전송 실패", e);
      alert("메시지 전송 실패");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        left: "50%",
        transform: "translateX(-50%)",
        background: "white",
        padding: 20,
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <h2>💬 채팅 중: {card.title}</h2>
      <img
        src={card.imageUrl}
        alt="카드 이미지"
        style={{ width: "100%", maxWidth: 300 }}
      />
      <p>{card.content}</p>

      <textarea
        placeholder="메시지를 입력하세요"
        rows={4}
        style={{ width: "100%", marginTop: 10 }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={sendMessage}>전송</button>
        <button onClick={onClose} style={{ marginLeft: 10 }}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
