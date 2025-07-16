import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Topbar } from "../components/Topbar";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import { useState } from "react";
import Show from "../components/Show";
import { useParams } from "react-router-dom";
import Antiquity from "../components/Antiquity";

const HomeDetailPage = () => {
  const { nickname } = useParams<{ nickname: string }>();
  const [isShowOpen, setIsShowOpen] = useState(false);

  const handleAntiquityClick = () => {
    setIsShowOpen(true);
  };

  return (
    <>
      <Banner>
        <Topbar />
        <Menu nickname={nickname || ""} />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
            <Antiquity onClick={handleAntiquityClick} />
          </MuseumSection>
        </Main>
      </ContentArea>

      {isShowOpen && <Show onClose={() => setIsShowOpen(false)} />}
    </>
  );
};

export default HomeDetailPage;

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
