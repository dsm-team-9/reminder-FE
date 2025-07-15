import styled from "@emotion/styled";
import BackgroundImage from "../assets/bannar-image.svg";
import Lamp from "../assets/lamp.svg";
import VLine from "../assets/v-line.svg";

const Antiquity = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Container onClick={onClick}>
      <ImageContainer />
      <ContentArea>
        <CategoryDiv>
          <SubjectName>역사</SubjectName>
        </CategoryDiv>
        <Name>빗살무늬 토기</Name>
        <Explain>
          빗살무늬 토기는 신석기 시대에 사용된 대표적인 토기로, 겉면에 빗살처럼
          평행하거나 ...
        </Explain>
      </ContentArea>
    </Container>
  );
};

export default Antiquity;

// 🔲 카드 컨테이너
const Container = styled.div`
  width: 351px;
  height: 458px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.25);
`;

// 🖼 상단 이미지
const ImageContainer = styled.div`
  width: 100%;
  height: 246px;
  background-image: url(${VLine});
  background-size: cover;
  background-position: center;
`;

const ContentArea = styled.div`
  padding: 20px 20px 0 20px; // 좌우 여백 20px, 아래는 필요없음
  margin-top: 10px; // 이미지 아래로 약간 띄움
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 🔖 카테고리 라벨 박스
const CategoryDiv = styled.div`
  width: fit-content;
  padding: 0 8px;
  height: 26px;
  background-color: #f5f4df;
  border-radius: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 🔖 라벨 텍스트
const SubjectName = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

// 📛 이름
const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;

// 📄 설명
const Explain = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
`;
