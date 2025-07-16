import instance from "./instance";

export interface SignupData {
  name: string;
  phoneNumber: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  message?: string;
}

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  try {
    const response = await instance.post("/auth/signup", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "회원가입 실패");
    } else {
      throw new Error("네트워크 오류;;;;;");
    }
  }
};

export interface LoginData {
  phoneNumber: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await instance.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "로그인 실패");
    } else {
      throw new Error("네트워크 오류;;;;;;;");
    }
  }
};
