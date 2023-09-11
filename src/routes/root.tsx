import React from "react";
import styled from "styled-components";

const Root: React.FC = () => {
  return (
    <RootWrapper>
      <h1>Home page</h1>
    </RootWrapper>
  );
};

export default Root;

const RootWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
