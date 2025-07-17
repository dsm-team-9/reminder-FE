"use client";

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BannerImage from "../assets/bannar-image.svg";
import { Category } from "../components/Category";
import { Menu } from "../components/Menu";
import { Social } from "../components/Social";
import { Topbar } from "../components/Topbar";
import FriendMuseum from "../components/FriendMuseum";
import instance from "../apis/instance";

// 타입 정의
export interface MuseumFollowing {
  userId: number;
  username: string;
  bannerUrl: string;
  cardCount: number;
}

export interface UserSearchResult {
  id: number;
  name: string;
  phoneNumber: string;
}

const HomePage = () => {
  const [followList, setFollowList] = useState<MuseumFollowing[]>([]);
  const [searchResults, setSearchResults] = useState<UserSearchResult[]>([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchFollowings = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("accessToken") || ""
            : "";

        const res = await instance.get<MuseumFollowing[]>(
          "/museums/followings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowList(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowings();
  }, []);

  const searchUsersByName = async (name: string) => {
    if (!name.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || ""
          : "";
      const res = await instance.get<UserSearchResult[]>("/auth/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { name },
      });
      setSearchResults(res.data);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  return (
    <Container>
      <Banner>
        <Topbar />
        <Menu />
      </Banner>

      <ContentArea>
        <CategoryWrapper>
          <Category />
          <Social
            onSearch={searchUsersByName}
            searchResults={searchResults}
            searchName={searchName}
            setSearchName={setSearchName}
          />
        </CategoryWrapper>

        <Main>
          <MuseumSection>
            {followList.length === 0 ? (
              <EmptyWrapper paddingLeft="100px">
                <NoFollow>팔로우한 박물관이 없습니다.</NoFollow>
              </EmptyWrapper>
            ) : (
              followList.map((museum) => (
                <FriendMuseum
                  key={museum.userId}
                  name={museum.username}
                  bannerUrl={museum.bannerUrl}
                  cardCount={museum.cardCount}
                />
              ))
            )}
          </MuseumSection>
        </Main>
      </ContentArea>
    </Container>
  );
};

// 전체 레이아웃
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// 배너 영역
const Banner = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 본문 전체 컨텐츠 영역
const ContentArea = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  gap: 137px;
  margin: 0;
  padding: 0 64px;
  box-sizing: border-box;
  align-items: flex-start;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
  flex-shrink: 0;
  margin: 0;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MuseumSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(531px, 1fr));
  gap: 47px 81px;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

// 빈 상태 표시용 Wrapper (paddingLeft를 props로 받음)
const EmptyWrapper = styled.div<{ paddingLeft?: string }>`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${(props) => props.paddingLeft || "0px"};
`;

const NoFollow = styled.p`
  font-size: 20px;
  color: #666;
  text-align: center;
  margin-left: 300px;
`;

export default HomePage;
