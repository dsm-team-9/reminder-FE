import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import VLine from "../assets/v-line.svg";
import SettingSVG from "../assets/setting.svg";
import Check from "../assets/check.svg";
import NonCheck from "../assets/non-check.svg";
import { Chat } from "./Chat";

type Props = {
  onClick?: () => void;
  showSettings?: boolean;
  onDelete?: () => void;
  onEditRequest?: () => void;
  isChattingPage?: boolean;
};

const Antiquity = ({
  onClick,
  showSettings = false,
  onDelete,
  onEditRequest,
  isChattingPage = false,
}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showConfirmationCircle, setShowConfirmationCircle] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const chatModalRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setModalOpen(false);
    onEditRequest?.();
  };

  const handleDelete = () => {
    onDelete?.();
    setModalOpen(false);
    setShowConfirmationCircle(true);
    setIsConfirmed(false);
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen((prev) => !prev);
  };

  const handleCircleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsConfirmed((prev) => !prev);
  };

  const handleChatOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setChatOpen(true);
  };

  const handleChatClose = () => {
    setChatOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalOpen(false);
      }

      if (
        chatModalRef.current &&
        !chatModalRef.current.contains(e.target as Node)
      ) {
        setChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Container onClick={onClick}>
        <ImageContainer>
          {showSettings && (
            <>
              <SettingsIcon
                src={SettingSVG}
                alt="설정"
                onClick={handleSettingsClick}
              />
              {isModalOpen && (
                <Modal ref={modalRef}>
                  <ModalButton onClick={handleEdit}>Edit</ModalButton>
                  <Line />
                  <ModalButton onClick={handleDelete}>Delete</ModalButton>
                </Modal>
              )}
            </>
          )}

          {showConfirmationCircle && (
            <ConfirmationIcon
              src={isConfirmed ? Check : NonCheck}
              alt={isConfirmed ? "확인됨" : "확인 필요"}
              onClick={handleCircleClick}
            />
          )}
        </ImageContainer>

        <ContentArea>
          <CategoryDiv>
            <SubjectName>역사</SubjectName>
          </CategoryDiv>
          <Name>빗살무늬 토기</Name>
          {!isChattingPage && (
            <Explain>
              빗살무늬 토기는 신석기 시대에 사용된 대표적인 토기로, 겉면에
              빗살처럼 평행하거나 ...
            </Explain>
          )}
          {isChattingPage && (
            <ChatButton onClick={handleChatOpen}>채팅하기</ChatButton>
          )}
        </ContentArea>
      </Container>

      {isChatOpen && (
        <ModalBackdrop>
          <ChatModal ref={chatModalRef}>
            <Chat onClose={handleChatClose} />
          </ChatModal>
        </ModalBackdrop>
      )}
    </>
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 246px;
  background-image: url(${VLine});
  background-size: cover;
  background-position: center;
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

const ConfirmationIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 10;
`;

const Modal = styled.div`
  position: absolute;
  top: 44px;
  right: 12px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 128px;
  z-index: 20;
`;

const ModalButton = styled.button`
  height: 44px;
  font-size: 18px;
  font-weight: 500;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f5f4df;
  }
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: #5f6074;
  margin: 0 auto;
`;

const ContentArea = styled.div`
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  position: relative;
`;

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

const SubjectName = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;

const Explain = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
`;

const ChatButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  height: 35px;
  width: 133px;
  background-color: #5f6074;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4b4c5c;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ChatModal = styled.div`
  width: min(100vw, 1245px);
  height: min(80vh, 653px);
  background: white;
  border-radius: 50px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
