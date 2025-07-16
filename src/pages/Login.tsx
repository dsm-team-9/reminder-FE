import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import Eye from "../assets/eyes-on.svg";
import Eyeoff from "../assets/eyes-off.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      phone: "",
      password: "",
    };

    if (!formData.phone) {
      newErrors.phone = "전화번호를 입력하세요";
    } else if (!/^01[0-9]-?\d{4}-?\d{4}$/.test(formData.phone)) {
      newErrors.phone = "올바른 전화번호를 입력하세요 (예: 010-1234-5678)";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력하세요";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login submitted:", formData);
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
        <LoginContainer>
          <Title>로그인</Title>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>전화번호</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="전화번호를 입력하세요"
                hasError={!!errors.phone}
              />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
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

            <SubmitButton type="submit">로그인</SubmitButton>
          </Form>

          <FooterText>
            계정이 없으신가요? <Link href="/signup">회원가입</Link>
          </FooterText>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
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
  height: 48px;
  background-color: #5f6074;
  color: white;
  font-weight: 600;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  margin-top: 4rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #6b7280;
  }

  &:focus {
    outline: 2px solid #9ca3af;
    outline-offset: 2px;
  }
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
