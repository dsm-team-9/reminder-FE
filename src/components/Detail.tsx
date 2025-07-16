import styled from "@emotion/styled";
import X from "../assets/x.svg";
import Plus from "../assets/Plus.svg";

const Detail = () => {
  return (
    <Container>
      <TopRow>
        <LeftGroup>
          <CategoryDiv>
            <SubjectName>역사</SubjectName>
            <img src={X} alt="x" />
          </CategoryDiv>
          <img src={Plus} alt="plus" />
        </LeftGroup>
        <img src={X} alt="x" />
      </TopRow>

      <Content>
        <ImageDiv />
        <RightBox>
          <TitleInput placeholder="제목을 입력하세요" />
          <ContentText placeholder="내용을 입력하세요" />
        </RightBox>
      </Content>

      <ButtonWrapper>
        <FixButton>확인</FixButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 1641px;
  height: 705px;
  border-radius: 50px;
  border: 1px solid black;
  padding: 40px 64px; /* UploadButton과 동일한 padding */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CategoryDiv = styled.div`
  width: 133px;
  height: 68px;
  background-color: #f5f4df;
  border-radius: 34px;
  padding-left: 32px;
  padding-right: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const SubjectName = styled.span`
  color: #5f6074;
  font-size: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1; /* 아래 버튼과 여백 확보 */
  gap: 40px;
`;

const ImageDiv = styled.div`
  width: 385px;
  height: 363px;
  background-color: gray;
  border-radius: 20px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 363px;
  justify-content: space-between;
  gap: 15px; /* TitleInput과 ContentText 사이 간격 */
`;

const TitleInput = styled.input`
  width: 1130px;
  height: 90px;
  border-radius: 22.5px;
  border: 1px solid #ddd;
  padding: 0 16px;
  font-size: 20px;
  box-sizing: border-box;
`;

const ContentText = styled.textarea`
  width: 1130px;
  height: 258px;
  border-radius: 22.5px;
  border: 1px solid #ddd;
  padding: 16px;
  font-size: 18px;
  resize: none;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FixButton = styled.button`
  width: 463px;
  height: 69px;
  background-color: #5f6074;
  color: #ffffff;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin-top: 100px; /* UploadButton과 동일한 위치를 맞추기 위한 마진 */
`;
