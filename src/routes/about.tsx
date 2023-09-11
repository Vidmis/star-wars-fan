import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <Container>
      <Title>About Star Wars</Title>
      <Description>
        Star Wars is an American epic space opera franchise, centered on a film
        series created by George Lucas. It depicts the adventures of characters
        from a galaxy far, far away in a long time ago. The franchise has been
        expanded into various films and other media, including television
        series, video games, novels, comic books, and theme park attractions.
      </Description>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  text-align: center;
  max-width: 600px;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
