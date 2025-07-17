import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import VLine from "../assets/v-line.svg";
import SettingSVG from "../assets/setting.svg";

interface CardData {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
}

interface Props {
  cardData: CardData;
  onClick?: () => void;
  showSettings?: boolean;
  onDelete?: (id: number) => void;
  onEditRequest?: (card: CardData) => void;
  onChatClick?: (cardId: number) => void;
}

const Antiquity = ({
  cardData,
  onClick,
  showSettings = false,
  onDelete,
  onEditRequest,
  onChatClick,
}: Props) => {
  const { id, title, content, category, imageUrl } = cardData;

  const [showActionMenu, setShowActionMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowActionMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container onClick={onClick}>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }}>
        {showSettings && (
          <>
            <SettingsIcon
              src={SettingSVG}
              onClick={(e) => {
                e.stopPropagation();
                setShowActionMenu((prev) => !prev);
              }}
            />
            {showActionMenu && (
              <ActionMenu ref={menuRef}>
                <ActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditRequest?.(cardData);
                    setShowActionMenu(false);
                  }}
                >
                  Edit
                </ActionButton>
                <Divider />
                <ActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.(id);
                    setShowActionMenu(false);
                  }}
                >
                  Delete
                </ActionButton>
              </ActionMenu>
            )}
          </>
        )}
      </ImageContainer>

      <ContentArea>
        <CategoryDiv>
          <SubjectName>{category}</SubjectName>
        </CategoryDiv>
        <Name>{title}</Name>
        <Explain>{content}</Explain>
        <ChatButton
          onClick={(e) => {
            e.stopPropagation();
            onChatClick?.(id);
          }}
        >
          채팅 시작
        </ChatButton>
      </ContentArea>
    </Container>
  );
};

export default Antiquity;

const Container = styled.div`
  width: 351px;
  height: 458px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 246px;
  background-image: url(${VLine});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SettingsIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 10;
`;

const ActionMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 20;
  width: 130px;
  height: 40px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ActionButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #555;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: #ddd;
`;

const ContentArea = styled.div`
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SubjectName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #999;
`;

const Name = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`;

const Explain = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #666;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChatButton = styled.button`
  margin-top: auto;
  align-self: flex-start;
  background-color: #5f6074;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #484a5b;
  }
`;
