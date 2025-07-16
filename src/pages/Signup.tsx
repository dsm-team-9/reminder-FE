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

  const [loading, setLoading] = useState(false);
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

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await signupUser(formData);
        if (response.success) {
          alert("회원가입 성공! 로그인 페이지로 이동합니다.");
          window.location.href = "/login";
        } else {
          alert(response.message || "회원가입에 실패했습니다.");
        }
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
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
                    alt="eye icon"
                    width={20}
                    height={20}
                  />
                </EyeButton>
              </PasswordContainer>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </InputGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "가입 중..." : "가입하기"}
            </SubmitButton>
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
  box-sizing: border-box;
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
  align-items: flex-start;
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
  margin-right: 420px;
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
  box-sizing: border-box;

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
  z-index: 10;
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
  transition: background-color 0.2s ease;
  font-size: 19px;
`;

const ErrorText = styled.p`
  margin-top: 0rem;
  font-size: 12px;
  color: #ef4444;
  align-self: flex-start;
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
