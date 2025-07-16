import styled from "@emotion/styled";
import Card from "../assets/card.svg";
import GameCard from "../components/GameCard";

const Game = () => {
  return (
    <Container>
      <CardImage src={Card} alt="Card" />
      <Title>첫번째로 사용할 카드를 선택해 주세요</Title>
      <CardRow>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </CardRow>
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
