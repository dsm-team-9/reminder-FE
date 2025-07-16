import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import VLine from "../assets/v-line.svg";
import SettingSVG from "../assets/setting.svg";

type Props = {
  onClick?: () => void;
  showSettings?: boolean;
  onDelete?: () => void;
  onEditRequest?: () => void;
};

const Antiquity = ({
  onClick,
  showSettings = false,
  onDelete,
  onEditRequest,
}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setModalOpen(false);
    onEditRequest?.();
  };

  const handleDelete = () => {
    onDelete?.();
    setModalOpen(false);
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
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
      </ImageContainer>

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
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 20px 20px 0 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
