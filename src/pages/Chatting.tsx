import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Topbar } from "../components/Topbar";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import Antiquity from "../components/Antiquity";
import { useState } from "react";
import Show from "../components/Show";

const Chatting = () => {
  const [isShowOpen, setIsShowOpen] = useState(false);
  return (
    <>
      <Banner>
        <Topbar />
        <Menu />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            <Antiquity onClick={() => setIsShowOpen(true)} />
            <Antiquity isChattingPage={true} />
            <Antiquity />
            <Antiquity />
            <Antiquity />
            <Antiquity />
            <Antiquity />
          </MuseumSection>
        </Main>
      </ContentArea>
      {isShowOpen && <Show onClose={() => setIsShowOpen(false)} />}
    </>
  );
};

export default Chatting;

// 🖼 배너 (상단 이미지)
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

// 📦 콘텐츠 전체 래퍼
const ContentArea = styled.div`
  padding: 0 64px;
  box-sizing: border-box;
  display: flex;
  gap: 137px; /* ← CategoryWrapper와 Main 사이 가로 간격 */
`;

// 🏷️ Category + Social 래퍼 (왼쪽 정렬, 세로 정렬, 간격 유지)
const CategoryWrapper = styled.div`
  margin-top: 57px; // Banner와 Category 사이 세로 간격
  margin-bottom: 32px; // Category와 Main(FriendMuseum) 사이 세로 간격
  display: flex;
  flex-direction: column;
  gap: 5px; // Category와 Social 사이 세로 간격
`;

// Main 영역 (FriendMuseum 모음)
const Main = styled.div`
  display: flex;
  gap: 40px; // (필요시 조절 가능) Main 내부 요소 간 간격
  margin-top: 32px; // CategoryWrapper와 Main 사이 세로 간격
  justify-content: flex-start;
`;

// FriendMuseum 카드 리스트 (2열 배치)
const MuseumSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 81px; // FriendMuseum 카드들 사이 가로 간격
  row-gap: 47px; // FriendMuseum 카드들 사이 세로 간격
`;
