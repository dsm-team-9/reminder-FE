"use client";

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Topbar } from "../components/Topbar";
import Antiquity from "../components/Antiquity";
import Detail from "../components/Detail";
import CreateItem from "../components/CreateItems";
import instance from "../apis/instance";

interface Card {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  userId: number;
  museumId: number;
}

const MyPage = () => {
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [editCard, setEditCard] = useState<Card | null>(null);

  const openDetailModal = () => setDetailModalOpen(true);
  const closeDetailModal = () => {
    setDetailModalOpen(false);
    setEditCard(null);
  };

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const fetchCards = async (category?: string) => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || ""
          : "";
      const res = await instance.get<Card[]>("/card", {
        headers: { Authorization: `Bearer ${token}` },
        params: category ? { category } : {},
      });
      setCards(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards(selectedCategory);
  }, [selectedCategory]);

  const handleDelete = async (cardId: number) => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || ""
          : "";
      await instance.delete(`/card/${cardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCards(selectedCategory);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditRequest = (card: Card) => {
    setEditCard(card);
    openDetailModal();
  };

  const handleEditSubmit = async (
    cardId: number,
    updatedCard: { title: string; content: string; category: string }
  ) => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || ""
          : "";
      await instance.patch(`/card/${cardId}`, updatedCard, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchCards(selectedCategory);
      closeDetailModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateSuccess = () => {
    fetchCards(selectedCategory);
    closeCreateModal();
  };

  return (
    <Container>
      <Banner>
        <Topbar />
        <Menu
          nickname="세은"
          isActivated={false}
          isMyMuseum={true}
          onCreateClick={openCreateModal}
        />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            {cards.length === 0 ? (
              <EmptyWrapper>
                <EmptyText>카드가 없습니다.</EmptyText>
              </EmptyWrapper>
            ) : (
              cards.map((card) => (
                <Antiquity
                  key={card.id}
                  cardData={card}
                  showSettings={true}
                  onEditRequest={handleEditRequest}
                  onDelete={handleDelete}
                />
              ))
            )}
          </MuseumSection>
        </Main>
      </ContentArea>

      {isDetailModalOpen && editCard && (
        <ModalOverlay onClose={closeDetailModal}>
          <Detail
            card={editCard}
            onClose={closeDetailModal}
            onSubmit={handleEditSubmit}
          />
        </ModalOverlay>
      )}

      {isCreateModalOpen && (
        <ModalOverlay onClose={closeCreateModal}>
          <CreateItem
            onClose={closeCreateModal}
            onCreateSuccess={handleCreateSuccess}
          />
        </ModalOverlay>
      )}
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh; /* 뷰포트 전체 높이 */
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

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
  flex: 1;
  display: flex;
  width: 100%;
  gap: 137px;
  margin: 0;
  padding: 0 64px;
  box-sizing: border-box;
  align-items: flex-start;
  overflow-y: auto; /* 스크롤 가능 */
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
  flex-shrink: 0;
  margin: 0;
`;

const Main = styled.div`
  width: 100%; /* 가로 꽉 채우기 */
  display: flex;
  flex-direction: column;
`;

const MuseumSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(531px, 1fr));
  gap: 47px 81px;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
`;

const EmptyText = styled.p`
  font-size: 20px;
  color: #666;
  text-align: center;
  margin-right: 300px;
`;

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

const ModalOverlay = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <OverlayContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </OverlayContainer>
  );
};
