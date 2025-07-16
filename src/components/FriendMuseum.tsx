// src/components/FriendMuseum.tsx
import styled from "@emotion/styled";
import BackgroundImage from "../assets/bannar-image.svg";
import Lamp from "../assets/lamp.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
}

const FriendMuseum = ({ name }: Props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/homeDetail/${encodeURIComponent(name)}`)}
    >
      <ImageContainer />
      <InfoRow>
        <Name>{name}’s museum</Name>
        <RightBox>
          <LampIcon src={Lamp} alt="lamp" />
          <Amount>15</Amount>
        </RightBox>
      </InfoRow>
    </Container>
  );
};

export default FriendMuseum;

const Container = styled.div`
  border-radius: 20px;
  width: 531px;
  height: 251px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 11.7px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 149px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  flex-grow: 1;
`;

const Name = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LampIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Amount = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
