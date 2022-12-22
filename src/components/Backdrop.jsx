import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(191, 191, 191, 0.47);
`;

const Backdrop = ({ sidebar, openSidebar }) => {
  return <>{sidebar && <Wrapper onClick={openSidebar}></Wrapper>}</>;
};

export default Backdrop;
