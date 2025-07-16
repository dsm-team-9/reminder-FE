import styled from "@emotion/styled";
import React from "react";

type SubjectProps = {
  onClose: (selectedSubject?: string) => void;
};

const Subject = ({ onClose }: SubjectProps) => {
  const subjectColors: Record<string, string> = {
    수학: "#A2D5FF",
    과학: "#C9A3FF",
    역사: "#F5F4DF",
    사회: "#9AFF94",
    국어: "#FFDB77",
  };

  const subjects = Object.keys(subjectColors);

  const handleSubjectClick = (subject: string) => {
    onClose(subject);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ButtonWrapper>
        {subjects.map((subject) => (
          <StyledDiv
            key={subject}
            color={subjectColors[subject]}
            onClick={() => handleSubjectClick(subject)}
          >
            {subject}
          </StyledDiv>
        ))}
      </ButtonWrapper>
    </Overlay>
  );
};

export default Subject;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const StyledDiv = styled.div<{ color: string }>`
  min-width: 94px;
  height: 60px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 500;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6074;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-bottom: 20px;
`;
