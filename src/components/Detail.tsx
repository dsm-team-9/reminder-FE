import React, { useState } from "react";
import styled from "@emotion/styled";
import X from "../assets/x.svg";
import Subject from "./Subject";

type DetailProps = {
  onClose: () => void;
};

const Detail = ({ onClose }: DetailProps) => {
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("역사");

  const handleCategoryClick = () => {
    setIsSubjectModalOpen(true);
  };

  const handleSubjectModalClose = (subject?: string) => {
    if (subject) {
      setSelectedCategory(subject);
    }
    setIsSubjectModalOpen(false);
  };

  const categoryColors: Record<string, string> = {
    수학: "#A2D5FF",
    과학: "#C9A3FF",
    역사: "#F5F4DF",
    사회: "#9AFF94",
    국어: "#FFDB77",
  };

  return (
    <Container>
      <TopRow>
        <LeftGroup>
          <CategoryDiv
            onClick={handleCategoryClick}
            style={{
              cursor: "pointer",
              backgroundColor: categoryColors[selectedCategory],
            }}
          >
            <SubjectName>{selectedCategory}</SubjectName>
          </CategoryDiv>
        </LeftGroup>
        <img src={X} alt="x" onClick={onClose} style={{ cursor: "pointer" }} />
      </TopRow>

      <Content>
        <ImageDiv />
        <RightBox>
          <TitleInput placeholder="빗살무늬토기" />
          <ContentText placeholder="빗살무늬 토기는 신석기 시대에 사용된 대표적인 토기로, 겉면에 빗살처럼 평행하거나 교차하는 무늬가 새겨진 것이 특징입니다. 주로 식량을 저장하거나 조리하는 데 사용되었으며, 한반도 전역에서 출토됩니다. 제작 방식은 손으로 빚은 후 무늬를 새기고 불에 구워 만드는 수공예 방식이었습니다. 이 토기는 당시 사람들의 생활 방식과 문화 수준을 보여주는 중요한 유물입니다." />
        </RightBox>
      </Content>

      <ButtonWrapper>
        <FixButton>확인</FixButton>
      </ButtonWrapper>

      {isSubjectModalOpen && <Subject onClose={handleSubjectModalClose} />}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 1641px;
  height: 705px;
  border-radius: 50px;
  border: 1px solid black;
  padding: 40px 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const CategoryDiv = styled.div`
  height: 68px;
  background-color: #f5f4df;
  border-radius: 34px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  transition: background-color 0.3s ease;
`;
const SubjectName = styled.span`
  color: #5f6074;
  font-size: 24px;
  font-weight: 500;
`;
const Content = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 40px;
`;
const ImageDiv = styled.div`
  width: 385px;
  height: 363px;
  background-color: gray;
  border-radius: 20px;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 363px;
  justify-content: space-between;
  gap: 15px;
`;
const TitleInput = styled.input`
  width: 1130px;
  height: 90px;
  border-radius: 22.5px;
  border: 1px solid #ddd;
  padding: 0 16px;
  font-size: 50px;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #f3f3f3;
  color: #1c1f42;
`;
const ContentText = styled.textarea`
  width: 1130px;
  height: 258px;
  border-radius: 22.5px;
  border: 1px solid #ddd;
  padding: 16px;
  font-size: 30px;
  resize: none;
  box-sizing: border-box;
  background-color: #f3f3f3;
  font-weight: 600;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const FixButton = styled.button`
  width: 463px;
  height: 69px;
  background-color: #5f6074;
  color: #ffffff;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 600;
  border: none;
  margin-top: 75px;
`;
