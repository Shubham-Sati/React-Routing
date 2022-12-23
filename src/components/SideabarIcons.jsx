import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 6.5%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  /* background-color: green; */
`;
const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 10px;
  /* background-color: green; */

  &:hover {
    background-color: lightgray;
  }
`;
const Span = styled.span``;

const SideabarIcons = () => {
  return (
    <Wrapper>
      <Container>
        <Link
          to="/"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <HomeIcon />
            <Span>Home</Span>
          </Icon>
        </Link>
        <Link
          to="/subscriptions"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <SubscriptionsIcon />
            <Span>Subscriptions</Span>
          </Icon>
        </Link>
        <Link
          to="/library"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <VideoLibraryIcon />
            <Span>Library</Span>
          </Icon>
        </Link>

        <Link
          to="/history"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <HistoryToggleOffIcon />
            <Span>History</Span>
          </Icon>
        </Link>
        <Link
          to="/videos"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <LocalFireDepartmentIcon />
            <Span>Explore</Span>
          </Icon>
        </Link>
        <Link
          to="/"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <HomeIcon />
            <Span>Home</Span>
          </Icon>
        </Link>

        <Link
          to="/subscriptions"
          style={{
            height: "100%",
            width: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Icon>
            <SubscriptionsIcon />
            <Span>Subscriptions</Span>
          </Icon>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default SideabarIcons;
