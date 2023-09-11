import React, { useCallback } from "react";
import styled from "styled-components";
import { Film } from "../api/starWarsTypes";
import ShowPeopleButton from "./ShowPeopleButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/reducers";
import { fetchCharacterData } from "../redux/reducers/characterSlice";

interface FilmCardProps {
  film: Film;
  filmCharactersUrls: string[];
}

const FilmCard: React.FC<FilmCardProps> = ({ film, filmCharactersUrls }) => {
  const dispatch: AppDispatch = useDispatch();

  const onShowPeopleClick = useCallback(() => {
    dispatch(fetchCharacterData(filmCharactersUrls));
  }, [dispatch, filmCharactersUrls]);

  return (
    <CardContainer>
      <Title>{film.title}</Title>
      <div>
        <Details>Episode ID: {film.episode_id}</Details>
        <Details>Release Date: {film.release_date}</Details>
        <ShowPeopleButton onShowPeopleClick={onShowPeopleClick} />
      </div>
    </CardContainer>
  );
};

export default FilmCard;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Details = styled.p`
  font-size: 1em;
  margin: 8px 0;
`;
