import styled from "@emotion/styled";

const Subject = () => {
  const subjectColors: Record<string, string> = {
    수학: "#A2D5FF",
    과학: "#C9A3FF",
    역사: "#F5F4DF",
    사회: "#9AFF94",
    국어: "#FFDB77",
  };

  const subjects = Object.keys(subjectColors);

  return (
    <Overlay>
      <ButtonWrapper>
        {subjects.map((subject) => (
          <StyledButton key={subject} color={subjectColors[subject]}>
            {subject}
          </StyledButton>
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
  max-width: 500px;
`;

const StyledButton = styled.button<{ color: string }>`
  width: 94px;
  height: 44px;
  border-radius: 13px;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6074;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;
