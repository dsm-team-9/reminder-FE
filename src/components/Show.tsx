"use client";

import styled from "@emotion/styled";
import X from "../assets/x.svg";

const Show = ({
  onClose,
  onConfirm,
  isGameMode = false,
}: {
  onClose: () => void;
  onConfirm?: () => void;
  isGameMode?: boolean;
}) => {
  console.log("Show props:", { isGameMode, onConfirm: !!onConfirm });

  return (
    <Overlay>
      <Container>
        <TopRow>
          <LeftGroup>
            <CategoryDiv>
              <SubjectName>역사</SubjectName>
            </CategoryDiv>
          </LeftGroup>
          <CloseIcon src={X} alt="close" onClick={onClose} />
        </TopRow>
        <Content>
          <ImageDiv />
          <RightBox>
            <TitleDisplay>빗살무늬 토기</TitleDisplay>
            <ContentDisplay>
              빗살무늬 토기는 신석기 시대에 사용된 대표적인 토기로, 겉면에
              빗살처럼 평행하거나 교차하는 무늬가 새겨진 것이 특징입니다. 주로
              식량을 저장하거나 조리하는 데 사용되었으며, 한반도 전역에서
              출토됩니다. 제작 방식은 손으로 빚은 후 무늬를 새기고 불에 구워
              만드는 수공예 방식이었습니다. 이 토기는 당시 사람들의 생활 방식과
              문화 수준을 보여주는 중요한 유물입니다.
            </ContentDisplay>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          </RightBox>
        </Content>
      </Container>
    </Overlay>
  );
};

export default Show;

const CloseIcon = styled.img`
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: #1c1f42;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;

  &:hover {
    background-color: #2a2d5a;
  }
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

const Container = styled.div`
  width: 1641px;
  height: 705px;
  border-radius: 50px;
  border: 1px solid black;
  padding: 40px 64px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1000;
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
  width: 116px;
  height: 68px;
  background-color: #f5f4df;
  border-radius: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubjectName = styled.span`
  color: #5f6074;
  font-size: 30px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 50px;
`;

const ImageDiv = styled.div`
  width: 385px;
  height: 363px;
  background-color: gray;
  border-radius: 20px;
  flex-shrink: 0;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 363px;
`;

const TitleDisplay = styled.div`
  font-size: 50px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const ContentDisplay = styled.div`
  font-size: 30px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  margin-bottom: 20px;
`;
