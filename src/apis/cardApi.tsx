import axios from "axios";
import type { AxiosInstance } from "axios";

// 카드 카테고리 타입 정의
export type CardCategory =
  | "MATH"
  | "SCIENCE"
  | "HISTORY"
  | "SOCIAL_STUDIES"
  | "KOREAN";

// 카드 인터페이스 정의 (GET 응답 스키마에 따름)
export interface Card {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: CardCategory;
  userId: number;
  museumId: number;
}

// 카드 생성 요청 인터페이스 정의 (POST 요청 본문 스키마에 따름)
export interface CreateCardRequest {
  title: string;
  content: string;
  category: CardCategory;
}

// 카드 업데이트 요청 인터페이스 정의 (PATCH 요청 본문 스키마에 따름)
export interface UpdateCardRequest {
  content?: string; // title, category, imageUrl, userId, museumId 필드 제거됨
}

// 채팅 요청 인터페이스 정의
export interface ChatRequest {
  message: string;
}

// 채팅 응답 인터페이스 정의
export interface ChatResponse {
  response: string;
}

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 카드 목록 조회 (카테고리 필터링 가능)
export const getCards = async (category?: CardCategory): Promise<Card[]> => {
  try {
    const response = await instance.get<Card[]>("/card", {
      params: category ? { category } : {},
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch cards: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while fetching cards.");
  }
};

// 카드 생성
export const createCard = async (
  cardData: CreateCardRequest
): Promise<Card> => {
  try {
    const response = await instance.post<Card>("/card", cardData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to create card: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while creating card.");
  }
};

// 카드 수정
export const updateCard = async (
  cardId: number,
  cardData: UpdateCardRequest
): Promise<Card> => {
  try {
    const response = await instance.patch<Card>(`/card/${cardId}`, cardData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to update card: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while updating card.");
  }
};

// 카드와 대화
export const chatWithCard = async (
  cardId: number,
  message: string
): Promise<ChatResponse> => {
  try {
    const response = await instance.post<ChatResponse>(`/card/${cardId}/chat`, {
      message,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to chat with card: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while chatting with card.");
  }
};
