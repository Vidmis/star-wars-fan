import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms } from "../redux/reducers/filmsSlice";
import { AppDispatch, RootState } from "../redux/reducers";
import { Film } from "../api/starWarsTypes";
import FilmCard from "../components/FilmCard";
import PeopleTable from "../components/PeopleTable";
import { styled } from "styled-components";

const Films: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const films: Film[] = useSelector((state: RootState) => state.films.films);
  const status = useSelector((state: RootState) => state.films.status);
  const characters = useSelector((state: RootState) => state.characters.data);
  const characterStatus = useSelector(
    (state: RootState) => state.characters.status
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFilms());
    }
  }, [status, dispatch]);

  return (
    <FilmsWrapper>
      <FilmsContainer>
        {status === "loading" && <Loading>Loading...</Loading>}
        {status === "failed" && <Error>Error loading films.</Error>}
        {films.map((film: Film) => (
          <FilmCard
            key={film.episode_id}
            film={film}
            filmCharactersUrls={film.characters}
          />
        ))}
      </FilmsContainer>
      <ListWrapper>
        {characterStatus === "loading" && <Loading>Loading...</Loading>}
        {characterStatus === "failed" && <div>Error loading films.</div>}
        {characters.length > 0 && characterStatus === "succeeded" && (
          <PeopleTable people={characters} />
        )}
      </ListWrapper>
    </FilmsWrapper>
  );
};

export default Films;

const FilmsWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const FilmsContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const ListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Loading = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const Error = styled(Loading)`
  color: red;
`;
