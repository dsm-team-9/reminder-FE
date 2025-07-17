"use client";
import styled from "@emotion/styled";
import VLine from "../assets/v-line.svg";

type Props = {
  onClick?: () => void;
  pageType?: "game" | "default" | "mypage";
};

const GameCard = ({ onClick, pageType = "default" }: Props) => {
  return (
    <Container onClick={onClick} pageType={pageType}>
      <ImageContainer />
      <ContentArea>
        <CategoryDiv>
          <SubjectName>역사</SubjectName>
        </CategoryDiv>
        <Name>빗살무늬 토기</Name>
      </ContentArea>
    </Container>
  );
};

export default GameCard;

const Container = styled.div<{ pageType?: string }>`
  width: 312px;
  height: 479px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.25);
  position: relative;
  padding: 0 23px;
  box-sizing: border-box;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 266px;
  background-image: url(${VLine});
  background-size: cover;
  background-position: center;
  border-radius: 10.5px;
  margin-top: 25px;
`;

const ContentArea = styled.div`
  padding: 20px 20px 0 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryDiv = styled.div`
  width: 70px;
  padding: 0 8px;
  height: 30px;
  background-color: #f5f4df;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubjectName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;
