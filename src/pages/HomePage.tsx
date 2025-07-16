import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Social } from "../components/Social";
import { Topbar } from "../components/Topbar";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import FriendMuseum from "../components/FriendMuseum";

const HomePage = () => {
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
            <FriendMuseum />
            <FriendMuseum />
            <FriendMuseum />
            <FriendMuseum />
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
