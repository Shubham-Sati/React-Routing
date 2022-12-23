import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: cyan;
  height: 100%;
  width: 93%;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const Library = () => {
  return (
    <Wrapper>
      <Container>This is Library Page</Container>
    </Wrapper>
  );
};

export default Library;
