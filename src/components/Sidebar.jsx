import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;
  width: 13rem;
  height: 94%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: sidebarAnime 0.5s linear;

  @keyframes sidebarAnime {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
`;

const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 10px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
const Span = styled.span``;
const SignIn = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid lightgray;
  height: 2rem;
  width: 7rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #8dcbe0;
    cursor: pointer;
    color: #3131b9;
  }
`;

const Hr = styled.hr`
  width: 100%;
  color: lightgray;
`;

const Sidebar = ({ sidebar, openSidebar }) => {
  const handleSidebar = () => {
    openSidebar();
  };

  return (
    <>
      {sidebar && (
        <Wrapper>
          <Container>
            <Icon>
              <MenuIcon onClick={openSidebar} />
            </Icon>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Logo onClick={openSidebar}>YouTube</Logo>
            </Link>
          </Container>
          <SidebarItems>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Items onClick={handleSidebar}>
                <HomeIcon />
                <Span>Home</Span>
              </Items>
            </Link>
            <Link
              to="/subscriptions"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <SubscriptionsIcon />
                <Span>Subscriptions</Span>
              </Items>
            </Link>
            <Hr />
            <SignIn>
              <Span>Sign in to like videos, comments, and subscribe</Span>
              <AvatarDiv>
                <AccountCircleIcon />
                Sign in
              </AvatarDiv>
            </SignIn>
            <Hr />
            <Link
              to="/library"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <VideoLibraryIcon />
                <Span>Library</Span>
              </Items>
            </Link>
            <Link
              to="/history"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <HistoryToggleOffIcon />
                <Span>History</Span>
              </Items>
            </Link>
            <Hr />
            <Link
              to="/videos"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <LocalFireDepartmentIcon />
                <Span>Explore</Span>
              </Items>
            </Link>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Items onClick={handleSidebar}>
                <HomeIcon />
                <Span>Home</Span>
              </Items>
            </Link>
            <Link
              to="/subscriptions"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <SubscriptionsIcon />
                <Span>Subscriptions</Span>
              </Items>
            </Link>
            <Link
              to="/library"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <VideoLibraryIcon />
                <Span>Library</Span>
              </Items>
            </Link>
            <Link
              to="/history"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Items onClick={handleSidebar}>
                <HistoryToggleOffIcon />
                <Span>History</Span>
              </Items>
            </Link>
          </SidebarItems>
        </Wrapper>
      )}
    </>
  );
};

export default Sidebar;
