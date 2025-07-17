import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Topbar } from "../components/Topbar";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import Antiquity from "../components/Antiquity";
import Chat from "../components/Chat";
import { useState } from "react";

interface CardData {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
}

// 예시 카드 데이터
const exampleCards: CardData[] = [
  {
    id: 1,
    title: "고대 유물 A",
    content: "설명 A",
    category: "청동기",
    imageUrl: "https://via.placeholder.com/350x246.png?text=Card+1",
  },
  {
    id: 2,
    title: "고대 유물 B",
    content: "설명 B",
    category: "철기",
    imageUrl: "https://via.placeholder.com/350x246.png?text=Card+2",
  },
  {
    id: 3,
    title: "고대 유물 C",
    content: "설명 C",
    category: "토기",
    imageUrl: "https://via.placeholder.com/350x246.png?text=Card+3",
  },
];

const Chatting = () => {
  const [chatCardId, setChatCardId] = useState<number | null>(null);

  return (
    <Container>
      <Banner>
        <Topbar />
        <Menu />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
        </CategoryWrapper>

        <Main>
          <MuseumSectionMoreNarrow>
            {exampleCards.map((card) => (
              <Antiquity
                key={card.id}
                cardData={card}
                onChatClick={(id) => setChatCardId(id)}
              />
            ))}
          </MuseumSectionMoreNarrow>
        </Main>
      </ContentArea>

      {chatCardId !== null && (
        <Chat onClose={() => setChatCardId(null)} cardId={chatCardId} />
      )}
    </Container>
  );
};

export default Chatting;

// 화면 전체 컨테이너
const Container = styled.div`
  width: 100vw;
  height: 100vh; /* 화면 세로 꽉 채움 */
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// 배너 영역
const Banner = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 540px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 컨텐츠 영역 - 배너 아래 화면 꽉 채우고 가로로 나누기
const ContentArea = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  gap: 137px;
  padding: 0 64px;
  box-sizing: border-box;
  align-items: flex-start;
  overflow-y: auto; /* 스크롤 가능 */
`;

// 카테고리 영역 너비 고정
const CategoryWrapper = styled.div`
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 57px;
  margin-bottom: 32px;
`;

// 메인 영역 - 카드 리스트
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

// 카드 목록 그리드 - 최소 350px 너비의 카드가 화면 가득 채움
const MuseumSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 47px 40px; /* 세로 47px 유지, 가로 40px로 줄임 */
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const MuseumSectionMoreNarrow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 47px 5px; /* 세로 47px, 가로 5px */
  width: 85%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
