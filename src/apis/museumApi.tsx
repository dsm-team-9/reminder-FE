import instance from "./instance";
import type { CardCategory } from "./cardApi";
import type { Card } from "./cardApi";
import axios from "axios";

// 박물관 팔로잉 목록 조회 응답 인터페이스 정의
export interface MuseumFollowing {
  userId: number;
  username: string;
  bannerUrl: string;
  cardCount: number;
}

// 박물관 배너 이미지 업로드 요청 인터페이스 정의
export interface UploadBannerRequest {
  file: string; // 파일의 base64 인코딩 문자열 또는 URL이라고 가정
}

// 박물관 배너 이미지 업로드
export const uploadMuseumBanner = async (
  museumId: number,
  fileData: UploadBannerRequest // 요청 본문 스키마에 따라 객체로 받음
): Promise<void> => {
  try {
    // 응답이 204 No Content이므로 response.data를 반환하지 않음
    await instance.post<void>(`/museums/${museumId}/banner`, fileData);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to upload museum banner: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while uploading museum banner."
    );
  }
};

// 특정 유저 박물관의 카드 조회 (카테고리 필터링 가능)
export const getUserMuseumCards = async (
  userId: number,
  category?: CardCategory
): Promise<Card[]> => {
  try {
    const response = await instance.get<Card[]>(`/museums/${userId}/cards`, {
      params: category ? { category } : {},
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch user museum cards: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while fetching user museum cards."
    );
  }
};

// 팔로우한 사람들의 박물관 목록 조회
export const getFollowingMuseums = async (): Promise<MuseumFollowing[]> => {
  try {
    const response = await instance.get<MuseumFollowing[]>(
      "/museums/followings"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw new Error(
        `Failed to fetch following museums: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while fetching following museums."
    );
  }
};
