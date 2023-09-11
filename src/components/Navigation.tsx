import React from "react";
import styled from "styled-components";

const Navigation: React.FC = () => {
  return (
    <>
      <Sidebar>
        <H1>Star Wars</H1>
        <NavigationWrapper>
          <LinkItem>
            <a href='/films'>Films</a>
          </LinkItem>
          <LinkItem>
            <a href='/about'>About</a>
          </LinkItem>
        </NavigationWrapper>
      </Sidebar>
    </>
  );
};

export default Navigation;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`;

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const LinkItem = styled.li`
  padding: 4px 8px;
`;
