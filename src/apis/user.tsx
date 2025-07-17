// lib/api에서 axios 인스턴스와 axios 임포트
import instance from "./instance";
import axios from "axios";

// 팔로잉 목록 조회 응답 인터페이스 정의
export interface FollowingUser {
  id: number;
  name: string;
  phoneNumber: string;
  cardCount: number;
}

// 사용자 검색 응답 인터페이스 정의
export interface SearchedUser {
  id: number;
  name: string;
  phoneNumber: string;
}

// 회원가입 요청 데이터 인터페이스
export interface SignupData {
  name: string;
  phoneNumber: string;
  password: string;
}

// 회원가입 응답 인터페이스
export interface SignupResponse {
  success: boolean;
  message?: string;
}

// 로그인 요청 데이터 인터페이스
export interface LoginData {
  phoneNumber: string;
  password: string;
}

// 로그인 응답 인터페이스
export interface LoginResponse {
  success: boolean;
  accessToken?: string;
  message?: string;
}

// 회원가입
export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  try {
    const response = await instance.post<SignupResponse>("/auth/signup", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          `회원가입 실패: ${error.response?.status || error.message}`
      );
    }
    throw new Error("회원가입 중 예상치 못한 오류가 발생했습니다.");
  }
};

// 로그인
export const loginUser = async (datas: LoginData): Promise<LoginResponse> => {
  try {
    const response = await instance.post<LoginResponse>("/auth/login", datas);
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          `로그인 실패: ${error.response?.status || error.message}`
      );
    }
    throw new Error("로그인 중 예상치 못한 오류가 발생했습니다.");
  }
};

// 팔로잉 목록 조회
export const getFollowingList = async (): Promise<FollowingUser[]> => {
  try {
    const response = await instance.get<FollowingUser[]>("/auth/following");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch following list: ${
          error.response?.status || error.message
        }`
      );
    }
    throw new Error(
      "An unexpected error occurred while fetching following list."
    );
  }
};

// 이름으로 사용자 검색
export const searchUsersByName = async (
  name: string
): Promise<SearchedUser[]> => {
  try {
    const response = await instance.get<SearchedUser[]>("/auth/search", {
      params: { name },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to search users: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while searching users.");
  }
};

// PVP 활성화/비활성화 설정
export const setPvpStatus = async (enabled: boolean): Promise<void> => {
  try {
    // 200 OK 응답에 본문이 없으므로 void 반환
    await instance.patch<void>("/auth/pvp-status", null, {
      params: { enabled },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to set PVP status: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while setting PVP status.");
  }
};

// 언팔로우
export const unfollowUser = async (id: number): Promise<void> => {
  try {
    // 204 No Content 응답이므로 void 반환
    await instance.delete<void>(`/auth/${id}/follow`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to unfollow user: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while unfollowing user.");
  }
};

// 팔로우
export const followUser = async (id: number): Promise<void> => {
  try {
    // 200 OK 응답에 본문이 없으므로 void 반환
    await instance.post<void>(`/auth/${id}/follow`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to follow user: ${error.response?.status || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while following user.");
  }
};
