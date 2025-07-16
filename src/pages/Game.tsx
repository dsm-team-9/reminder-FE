"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import Card from "../assets/card.svg";
import GameCard from "../components/GameCard";
import Show from "../components/Show";
import GameLoadingPage from "./GameLoadingPage";

const Game = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]); // 카드 ID 배열
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (selectedCard !== null) {
      const newCards = cards.filter((id) => id !== selectedCard);
      setCards(newCards);
      setSelectedCard(null);
      setShowModal(false);

      if (newCards.length === 0) {
        // 마지막 카드를 선택했을 때 로딩 페이지로 전환
        setIsLoading(true);
      }
    }
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

  if (isLoading) {
    return <GameLoadingPage />; // 로딩 중일 때 GameLoadingPage 렌더링
  }

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
      {showModal && (
        <Overlay>
          <Show
            onClose={handleClose}
            onConfirm={handleConfirm}
            isGameMode={true}
          />
        </Overlay>
      )}
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.49);
  display: flex;
  justify-content: center;
  align-items: center;
`;
