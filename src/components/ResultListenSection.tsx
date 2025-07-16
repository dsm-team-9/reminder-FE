"use client";

import styled from "@emotion/styled";

// Mock data for demonstration (실제 데이터는 props로 받을 수 있습니다)
const resultItemsData = [
  {
    id: 1,
    name: "빗살무늬 토기",
    status: "승리",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "빗살무늬 토기",
    status: "패배",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "빗살무늬 토기",
    status: "패배",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "빗살무늬 토기",
    status: "승리",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "빗살무늬 토기",
    status: "승리",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
];

type ResultListSectionProps = {
  onResultItemClick: (id: number) => void;
  selectedResultItem: number | null;
};

const ResultListSection = ({
  onResultItemClick,
  selectedResultItem,
}: ResultListSectionProps) => {
  return (
    <Container>
      <SectionTitle>전시품별 결과</SectionTitle>
      <ResultList>
        {resultItemsData.map((item) => (
          <ResultItem
            key={item.id}
            onClick={() => onResultItemClick(item.id)}
            isSelected={selectedResultItem === item.id}
          >
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <StatusTag status={item.status}>{item.status}</StatusTag>
          </ResultItem>
        ))}
      </ResultList>
    </Container>
  );
};

export default ResultListSection;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px; /* 기존 LeftPanel의 gap 유지 */
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #1c1f42;
  margin-bottom: 10px;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; /* 각 ResultItem 사이의 간격을 12px로 설정 */
  overflow-y: auto; /* 내용이 넘칠 때만 스크롤바 표시 */
  max-height: 500px; /* 최대 높이 설정 */
  /* width: 481px; 와 height: 91px; 제거 */
`;

const ResultItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background-color: white; /* 각 아이템에 흰색 배경 적용 */
  border-radius: 20px; /* 각 아이템에 둥근 모서리 적용 */
  box-shadow: 0px 2px 7.3px rgba(0, 0, 0, 0.1); /* 각 아이템에 그림자 적용 */
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
  width: 487px;
  height: 91px;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #ccc; /* Placeholder background */
`;

const ItemName = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #1c1f42;
  flex-grow: 1;
`;

const StatusTag = styled.span<{ status: string }>`
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: ${(props) =>
    props.status === "승리" ? "#DCFCE7" : "#FEE2E2"};
  color: ${(props) => (props.status === "승리" ? "#15803D" : "#DE352C")};
`;
