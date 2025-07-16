// src/data/museumData.ts

export type Artifact = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const museumData: Record<string, Artifact[]> = {
  권세은: [
    {
      id: 1,
      title: "청동기",
      description: "청동기 유물 설명입니다.",
      imageUrl: "/images/bronze.jpg",
    },
    {
      id: 2,
      title: "토기",
      description: "토기 유물 설명입니다.",
      imageUrl: "/images/pottery.jpg",
    },
  ],
  김소림: [
    {
      id: 3,
      title: "석기",
      description: "석기 유물 설명입니다.",
      imageUrl: "/images/stone.jpg",
    },
  ],
  // 필요한 만큼 더 추가
};
