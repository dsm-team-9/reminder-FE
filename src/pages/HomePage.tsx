// src/pages/HomePage.tsx
import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Social } from "../components/Social";
import { Topbar } from "../components/Topbar";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import FriendMuseum from "../components/FriendMuseum";

const HomePage = () => {
  // 예시 팔로우 친구 목록, 추후 API 연동 가능
  const followList = ["권세은", "김소림", "민수아", "박지민"];

  return (
    <>
      <Banner>
        <Topbar />
        <Menu />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
          <Social />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            {followList.map((name) => (
              <FriendMuseum key={name} name={name} />
            ))}
          </MuseumSection>
        </Main>
      </ContentArea>
    </>
  );
};

export default HomePage;

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

const ContentArea = styled.div`
  padding: 0 64px;
  box-sizing: border-box;
  display: flex;
  gap: 137px;
`;

const CategoryWrapper = styled.div`
  margin-top: 57px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
  flex-shrink: 0;
`;

const Main = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 32px;
  justify-content: flex-start;
`;

const MuseumSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 81px;
  row-gap: 47px;
`;
