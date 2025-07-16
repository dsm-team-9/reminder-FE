import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Topbar } from "../components/Topbar";
import Antiquity from "../components/Antiquity";
import Detail from "../components/Detail";

const MyPage = () => {
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  const openDetailModal = () => setDetailModalOpen(true);
  const closeDetailModal = () => setDetailModalOpen(false);

  return (
    <>
      <Banner>
        <Topbar />
        <Menu nickname="세은" isActivated={false} isMyMuseum={true} />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
            <Antiquity showSettings onEditRequest={openDetailModal} />
          </MuseumSection>
        </Main>
      </ContentArea>

      {isDetailModalOpen && (
        <ModalOverlay onClose={closeDetailModal}>
          <Detail onClose={closeDetailModal} />
        </ModalOverlay>
      )}
    </>
  );
};

export default MyPage;

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

type ModalOverlayProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <OverlayContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 50px;
  max-width: 1641px;
  width: 100%;

  padding: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;
