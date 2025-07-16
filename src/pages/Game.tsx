"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import Card from "../assets/card.svg";
import GameCard from "../components/GameCard";
import Show from "../components/Show";

const Game = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]); // 카드 ID 배열
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (selectedCard !== null) {
      setCards(cards.filter((id) => id !== selectedCard));
      setSelectedCard(null);
    }
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const getOrdinalNumber = (num: number) => {
    switch (num) {
      case 1:
        return "첫번째";
      case 2:
        return "두번째";
      case 3:
        return "세번째";
      case 4:
        return "네번째";
      case 5:
        return "다섯번째";
      default:
        return "첫번째";
    }
  };

  const currentOrder = 6 - cards.length;

  return (
    <Container>
      <CardImage src={Card} alt="Card" />
      <Title>
        {getOrdinalNumber(currentOrder)}로 사용할 카드를 선택해 주세요
      </Title>
      <CardRow>
        {cards.map((cardId) => (
          <GameCard key={cardId} onClick={() => handleCardClick(cardId)} />
        ))}
      </CardRow>
      {showModal && <Show onClose={handleClose} onConfirm={handleConfirm} />}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const CardImage = styled.img`
  margin-top: 100px;
  max-width: 100%;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin: 40px 0 110px 0;
  color: #1c1f42;
`;

const CardRow = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;
  justify-content: center;
`;
