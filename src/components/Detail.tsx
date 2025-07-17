import React, { useState } from "react";
import styled from "@emotion/styled";
import X from "../assets/x.svg";
import Subject from "./Subject";

type DetailProps = {
  card: {
    id: number;
    title: string;
    content: string;
    category: string;
  };
  onClose: () => void;
  onSubmit: (
    cardId: number,
    updatedContent: string,
    updatedCategory: string,
    updatedTitle: string
  ) => Promise<void>;
};

const Detail = ({ card, onClose, onSubmit }: DetailProps) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);
  const [selectedCategory, setSelectedCategory] = useState(
    card.category || "역사"
  );
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsSubjectModalOpen(true);
  };

  const handleSubjectModalClose = (subject?: string) => {
    if (subject) {
      setSelectedCategory(subject);
    }
    setIsSubjectModalOpen(false);
  };

  const handleConfirm = async () => {
    try {
      await onSubmit(card.id, content, selectedCategory, title);
      onClose();
    } catch (error) {
      console.error(error);
    }
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
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ContentText
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </RightBox>
      </Content>

      <ButtonWrapper>
        <FixButton onClick={handleConfirm}>확인</FixButton>
      </ButtonWrapper>

      {isSubjectModalOpen && <Subject onClose={handleSubjectModalClose} />}
    </Container>
  );
};

export default Detail;

// styled components (기존 그대로 유지)
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
