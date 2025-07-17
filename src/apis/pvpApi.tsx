// lib/api에서 axios 인스턴스와 axios 임포트
import instance from "./instance";
import axios from "axios";

// 최근 대결 결과 조회 응답 인터페이스 정의
export interface RoundResult {
  roundNumber: number;
  userCardName: string;
  result: string; // "WIN", "LOSE", "DRAW" 등
  feedback: string;
}

export interface LatestBattleResult {
  totalWins: number;
  totalLosses: number;
  winRate: number;
  roundResults: RoundResult[];
}

// 대결 시작 및 라운드 진행 응답 인터페이스 정의
export interface PvpBattle {
  id: number;
  initiatorUserId: number;
  opponentUserId: number;
  status: "PENDING_SELECTION" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED"; // 예시 상태
  currentRound: number;
  initiatorScore: number;
  opponentScore: number;
}

// PVP 활성화 여부 확인
export const isPvpActive = async (): Promise<boolean> => {
  try {
    const response = await instance.get<boolean>("/api/pvp/active");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to check PVP active status: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while checking PVP active status."
    );
  }
};

// 최근 대결 결과 조회
export const getLatestBattleResult = async (): Promise<LatestBattleResult> => {
  try {
    const response = await instance.get<LatestBattleResult>(
      "/api/pvp/battles/latest/result"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch latest battle result: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while fetching latest battle result."
    );
  }
};

// 대결 시작 가능 여부 확인
export const canInitiateBattle = async (
  opponentUserId: number
): Promise<boolean> => {
  try {
    const response = await instance.get<boolean>(
      `/api/pvp/can-initiate/${opponentUserId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to check if battle can be initiated: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while checking battle initiation possibility."
    );
  }
};

// PVP 카드 선택
export const selectPvpCards = async (cardIds: number[]): Promise<void> => {
  try {
    // 응답 스키마가 없으므로 void 반환
    await instance.post<void>("/api/pvp/cards", { cardIds });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to select PVP cards: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while selecting PVP cards.");
  }
};

// 대결 시작
export const initiateBattle = async (
  opponentUserId: number
): Promise<PvpBattle> => {
  try {
    const response = await instance.post<PvpBattle>(
      `/api/pvp/initiate/${opponentUserId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to initiate battle: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while initiating battle.");
  }
};

// 라운드 진행
export const playPvpRound = async (
  battleId: number,
  userCardId: number
): Promise<PvpBattle> => {
  try {
    const response = await instance.post<PvpBattle>(
      `/api/pvp/${battleId}/play-round`,
      userCardId
    ); // 요청 본문이 0이므로 userCardId로 가정
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to play PVP round: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while playing PVP round.");
  }
};
