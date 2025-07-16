// src/components/ArtifactDetail.tsx
import styled from "@emotion/styled";

interface ArtifactDetailProps {
  artifact: {
    title: string;
    description: string;
    imageUrl: string;
  };
  onClose: () => void;
}

const ArtifactDetail = ({ artifact, onClose }: ArtifactDetailProps) => {
  return (
    <Overlay onClick={onClose}>
      <DetailBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{artifact.title}</Title>
        <Image src={artifact.imageUrl} alt={artifact.title} />
        <Description>{artifact.description}</Description>
      </DetailBox>
    </Overlay>
  );
};

export default ArtifactDetail;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DetailBox = styled.div`
  background: white;
  border-radius: 15px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;
