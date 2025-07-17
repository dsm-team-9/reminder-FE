"use client";

import styled from "@emotion/styled";
import FileTextIcon from "../assets/file-box.svg";
import CheckCircleIcon from "../assets/rectangle-check.svg";
import XCircleIcon from "../assets/rectangle-x.svg";
import PercentIcon from "../assets/rectangle-percentage.svg";
import MessageCircleIcon from "../assets/message-chat.svg";
import { useState } from "react";
import ResultListSection from "../components/ResultListenSection";

// Mock data for demonstration
const summaryData = [
  { icon: FileTextIcon, value: 5, label: "총 전시품" },
  { icon: CheckCircleIcon, value: 3, label: "승리" },
  { icon: XCircleIcon, value: 2, label: "패배" },
  { icon: PercentIcon, value: "60%", label: "승률" },
];

const GameResultPage = () => {
  const [selectedResultItem, setSelectedResultItem] = useState<number | null>(
    null
  );
  const handleResultItemClick = (id: number) => {
    setSelectedResultItem(id);
    // Here you would fetch or display AI feedback based on the selected item
    console.log(`Selected item for AI feedback: ${id}`);
  };
  return (
    <Wrapper>
      <Header>게임 결과</Header>
      <MainContent>
        <SummarySection>
          {summaryData.map((data, index) => (
            <SummaryCard key={index}>
              {" "}
              {/* SummaryCard의 IconDiv는 그대로 둡니다. */}
              <SummaryIcon
                src={data.icon || "/placeholder.svg"}
                alt={data.label}
              />
              <SummaryValue>{data.value}</SummaryValue>
              <SummaryLabel>{data.label}</SummaryLabel>
            </SummaryCard>
          ))}
        </SummarySection>
        <ResultsSection>
          {/* LeftPanel 대신 ResultListSection 컴포넌트 사용 */}
          <ResultListSection
            onResultItemClick={handleResultItemClick}
            selectedResultItem={selectedResultItem}
          />
          <RightPanel>
            <SectionTitle>AI 피드백</SectionTitle>
            <AIFeedbackPanel>
              <FeedbackIconWrapper>
                {" "}
                {/* FeedbackIcon을 감싸는 새로운 Div */}
                <FeedbackIcon src={MessageCircleIcon} alt="Message Icon" />{" "}
              </FeedbackIconWrapper>
              <FeedbackTitle>전시품을 선택해주세요</FeedbackTitle>
              <FeedbackText>
                왼쪽에서 전시품을 클릭하면 AI 피드백을 확인할 수 있습니다
              </FeedbackText>
            </AIFeedbackPanel>
          </RightPanel>
        </ResultsSection>
      </MainContent>
      <Footer>
        <FooterText>
          가져온 전시품은 총 2개이며 현재 총 전시품 갯수는 18개입니다
        </FooterText>
        <ConfirmButton>확인</ConfirmButton>
      </Footer>
    </Wrapper>
  );
};

export default GameResultPage;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  box-sizing: border-box;
`;

const Header = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #1c1f42;
  margin-bottom: 40px;
`;

const MainContent = styled.div`
  width: 1641px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: white;
  border-radius: 20.5px;
  padding: 30px;
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.1);
  width: 100%; /* MainContent의 너비를 따르도록 100%로 변경 */
  height: 236px;
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  height: 100%; /* 그리드 셀의 전체 높이를 채우도록 설정 */
`;

const IconDiv = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e5e7eb; /* 배경색 추가 */
  border-radius: 50%; /* 원형으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummaryIcon = styled.img`
  width: 48px; /* Adjust size as needed */
  height: 48px; /* Adjust size as needed */
  color: #1c1f42; /* SVG fill color might need to be set in the SVG file itself or via CSS filter */
`;

const SummaryValue = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #1c1f42;
`;

const SummaryLabel = styled.span`
  font-size: 20px;
  color: #5f6074;
`;

const ResultsSection = styled.div`
  display: flex;
  gap: 40px;
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #1c1f42;
  margin-bottom: 10px;
`;

const AIFeedbackPanel = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 400px; /* Ensure it takes up space */
  text-align: center;
  gap: 15px;
`;

const FeedbackIconWrapper = styled.div`
  /* FeedbackIcon을 감싸는 새로운 Div */
  width: 80px;
  height: 80px;
  background-color: #e5e7eb; /* 배경색 추가 */
  border-radius: 20px; /* 원형으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackIcon = styled.img`
  width: 34px; /* Adjust size as needed */
  height: 34px; /* Adjust size as needed */
  color: #ccc; /* SVG fill color might need to be set in the SVG file itself or via CSS filter */
`;

const FeedbackTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: #1c1f42;
  margin-top: 10px;
`;

const FeedbackText = styled.p`
  font-size: 18px;
  color: #5f6074;
  line-height: 1.5;
  max-width: 400px;
`;

const Footer = styled.div`
  width: 1641px;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const FooterText = styled.p`
  font-size: 20px;
  color: #5f6074;
`;

const ConfirmButton = styled.button`
  width: 463px; /* Adjusted width for the button */
  height: 69px; /* Adjusted height for the button */
  background-color: #5f6074;
  color: #ffffff;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4a4d5a;
  }
`;
