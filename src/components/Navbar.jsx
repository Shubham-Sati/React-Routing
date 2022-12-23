import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 8%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.p`
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const SerarchBar = styled.input`
  height: 2rem;
  width: 35rem;
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 0 2rem;
  outline: none;
  font-size: 14px;
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

const Navbar = ({ openSidebar }) => {
  return (
    <Wrapper>
      <Container>
        <Icon>
          <MenuIcon onClick={openSidebar} />
        </Icon>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Logo>YouTube</Logo>
        </Link>
      </Container>
      <Container>
        <SerarchBar placeholder="Search" />
        <SearchIcon />
      </Container>
      <AvatarDiv>
        <AccountCircleIcon />
        Sign in
      </AvatarDiv>
    </Wrapper>
  );
};

export default Navbar;
