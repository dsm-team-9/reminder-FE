import styled from "@emotion/styled";
import Plus from "../assets/Plus.svg";
import X from "../assets/x.svg";

const CreateItem = () => {
  return (
    <Container>
      <HeaderRow>
        <Icon src={Plus} alt="plus" />
        <Icon src={X} alt="close" />
      </HeaderRow>
      <ContentWrapper>
        <NameInput type="text" placeholder="이곳에 전시품 이름을 작성하세요" />
        <ContentInput
          type="text"
          placeholder="이곳에 전시품에 관한 설명을 작성하세요"
        />
        <ButtonWrapper>
          <UploadButton>업로드</UploadButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default CreateItem;

const Container = styled.div`
  width: 1641px;
  height: 705px;
  border: 1px solid black;
  border-radius: 50px;
  padding: 40px 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

const NameInput = styled.input`
  width: 100%;
  height: 90px;
  border-radius: 22.5px;
  background-color: #f3f3f3;
  border: none;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
`;

const ContentInput = styled.input`
  width: 100%;
  height: 258px;
  background-color: #f3f3f3;
  border-radius: 22.5px;
  border: none;
  padding: 20px;
  font-size: 18px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UploadButton = styled.button`
  width: 463px;
  height: 69px;
  background-color: #5f6074;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-top: 100px;
`;
