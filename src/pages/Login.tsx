import React from "react";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <>
      <SignupContainer>
        <Title>로그인</Title>
        <span>
          계정이 없으신가요? <Link>회원가입</Link>
        </span>
      </SignupContainer>
    </>
  );
};

export default Login;

const SignupContainer = styled.div`
  border-radius: 32px;
  box-shadow: 0px 0px 4px 0px rgb(0, 0, 0, 0.4);
  width: 624px;
  height: 546px;
`;
const Link = styled.a`
  color: #9000ff;
  font-weight: 600;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
