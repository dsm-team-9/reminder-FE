// pages/Conversation.tsx
import React, { useEffect, useState } from "react";
import instance from "../apis/instance";
import Antiquity from "../components/Antiquity";
import ChatModal from "../components/ChatModal";

interface Card {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  userId: number;
  museumId: number;
}

const Conversation = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const fetchCards = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await instance.get("/card/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCards(res.data);
    } catch (e) {
      console.error("카드 불러오기 실패", e);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>💬 카드 목록</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {cards.map((card) => (
          <div key={card.id}>
            <Antiquity cardData={card} />
            <button
              style={{ marginTop: 10 }}
              onClick={() => setSelectedCard(card)}
            >
              이 카드로 채팅하기
            </button>
          </div>
        ))}
      </div>

      {selectedCard && (
        <ChatModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default Conversation;
