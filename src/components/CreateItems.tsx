import styled from "@emotion/styled";
import React, { useState } from "react";
import Plus from "../assets/Plus.svg";
import X from "../assets/x.svg";
import Subject from "./Subject";
type CreateItemProps = {
  onClose?: () => void;
};

const CreateItem = ({ onClose }: CreateItemProps) => {
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("빈태그");

  const categoryColors: Record<string, string> = {
    수학: "#A2D5FF",
    과학: "#C9A3FF",
    역사: "#F5F4DF",
    사회: "#9AFF94",
    국어: "#FFDB77",
    빈태그: "#f5f4df",
  };

  const handleCategoryClick = () => {
    setIsSubjectModalOpen(true);
  };

  const handleSubjectModalClose = (subject?: string) => {
    if (subject) {
      setSelectedCategory(subject);
    }
    setIsSubjectModalOpen(false);
  };

  return (
    <Container>
      <HeaderRow>
        <CategoryDiv
          onClick={handleCategoryClick}
          style={{
            cursor: "pointer",
            backgroundColor: categoryColors[selectedCategory],
          }}
        >
          <SubjectName>{selectedCategory}</SubjectName>
        </CategoryDiv>
        {onClose && (
          <Icon
            src={X}
            alt="close"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        )}
      </HeaderRow>

      <ContentWrapper>
        <NameInput type="text" placeholder="이곳에 전시품 이름을 작성하세요" />
        <ContentInput
          as="textarea"
          placeholder="이곳에 전시품에 관한 설명을 작성하세요"
        />

        <ButtonWrapper>
          <UploadButton>업로드</UploadButton>
        </ButtonWrapper>
      </ContentWrapper>

      {isSubjectModalOpen && <Subject onClose={handleSubjectModalClose} />}
    </Container>
  );
};

export default CreateItem;

const Container = styled.div`
  width: 1641px;
  height: 705px;
  border: 1px solid black;
  border-radius: 50px;
  padding: 40px 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

const NameInput = styled.input`
  width: 100%;
  height: 90px;
  border-radius: 22.5px;
  background-color: #f3f3f3;
  border: none;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
  font-weight: 600;
  color: #1c1f42;
  font-size: 50px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 258px;
  background-color: #f3f3f3;
  border-radius: 22.5px;
  border: none;
  padding: 20px;
  font-size: 30px;
  box-sizing: border-box;
  resize: none;
  font-weight: 600;
  color: #1c1f42;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UploadButton = styled.button`
  width: 463px;
  height: 69px;
  background-color: #5f6074;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  font-size: 25px;
  font-weight: 600;
  margin-top: 75px;
  cursor: pointer;
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
