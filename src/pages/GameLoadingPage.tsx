"use client";

import { useEffect, useState } from "react";
import Card from "../assets/card.svg";
import styled from "@emotion/styled";

const GameLoadingPage = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const sequence = ["", ".", "..", "..."];
    let index = 0;
    const interval = setInterval(() => {
      setDots(sequence[index]);
      index = (index + 1) % sequence.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Content>
        <img src={Card || "/placeholder.svg"} alt="card" />
        <TextRow>
          <Text>결과를 측정 중입니다</Text>
          <MoveText>{dots}</MoveText>
        </TextRow>
      </Content>
    </Wrapper>
  );
};

export default GameLoadingPage;

const Wrapper = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.span`
  color: #1c1f42;
  font-size: 40px;
`;

const MoveText = styled.span`
  color: #1c1f42;
  font-size: 40px;
  margin-left: 8px;
`;
