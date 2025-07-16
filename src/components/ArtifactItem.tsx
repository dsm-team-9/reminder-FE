// src/components/ArtifactItem.tsx
import styled from "@emotion/styled";

interface ArtifactItemProps {
  artifact: {
    id: number;
    title: string;
    imageUrl: string;
  };
  onClick: () => void;
}

const ArtifactItem = ({ artifact, onClick }: ArtifactItemProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={artifact.imageUrl} alt={artifact.title} />
      <Title>{artifact.title}</Title>
    </Container>
  );
};

export default ArtifactItem;

const Container = styled.div`
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.div`
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;
