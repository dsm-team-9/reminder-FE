// Signup.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import Eye from "../assets/eyes-on.svg";
import Eyeoff from "../assets/eyes-off.svg";
import { signupUser } from "../apis/user";
import type { SignupData } from "../apis/user";

const Signup = () => {
  const [formData, setFormData] = useState<SignupData>({
    phoneNumber: "",
    name: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    phoneNumber: "",
    name: "",
    password: "",
  });

  const [apiError, setApiError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === "phoneNumber") {
      newValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      phoneNumber: "",
      name: "",
      password: "",
    };

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "전화번호를 입력하세요";
    } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "전화번호 형식이 틀립니다";
    }

    if (!formData.name) {
      newErrors.name = "닉네임을 입력하세요";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Signup.tsx의 handleSubmit 함수를 수정하여 더 자세한 로깅
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log("전송할 데이터:", formData); // 전송 데이터 로그
        const response = await signupUser(formData);
        console.log("전체 응답:", response); // 전체 응답 로그

        // 응답 상태와 관계없이 로그인 페이지로 이동해보기
        window.location.href = "/login";
      } catch (error: any) {
        console.error("상세 에러:", error);
        console.error("에러 메시지:", error.message);
      }
    }
  };

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f9fafb;
          }
        `}
      />
      <Container>
        <SignupContainer>
          <Title>회원가입</Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>전화번호</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="전화번호를 입력하세요"
                hasError={!!errors.phoneNumber}
                maxLength={11}
              />
              {errors.phoneNumber && (
                <ErrorText>{errors.phoneNumber}</ErrorText>
              )}
            </InputGroup>

            <InputGroup>
              <Label>닉네임</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="닉네임을 입력하세요"
                hasError={!!errors.name}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label>비밀번호</Label>
              <PasswordContainer>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 입력하세요"
                  hasError={!!errors.password}
                />
                <EyeButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                >
                  <img
                    src={showPassword ? Eye : Eyeoff}
                    alt="비밀번호 보기 아이콘"
                    width={20}
                    height={20}
                  />
                </EyeButton>
              </PasswordContainer>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </InputGroup>

            <SubmitButton type="submit">가입하기</SubmitButton>
          </Form>

          <FooterText>
            계정이 있으신가요? <Link href="/login">로그인</Link>
          </FooterText>
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;

// ------------------------ 스타일 정의 ------------------------

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupContainer = styled.div`
  background: white;
  border-radius: 32px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  width: 624px;
  max-width: 90%;
  padding: 3rem 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  border-radius: 13px;
  border: 1px solid ${(props) => (props.hasError ? "#ef4444" : "#e5e7eb")};
  font-size: 16px;
  background-color: #f9fafb;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #5f6074;
  color: white;
  font-weight: 600;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  margin-top: 1.5rem;
  font-size: 19px;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: #ef4444;
  margin-top: 0.25rem;
`;

const FooterText = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
`;

const Link = styled.a`
  color: #9000ff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #7c3aed;
  }
`;
