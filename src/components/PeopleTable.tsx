import React from "react";
import { Person } from "../api/starWarsTypes";
import styled from "styled-components";

interface PeopleTableProps {
  people: Person[];
}

const PeopleTable: React.FC<PeopleTableProps> = ({ people }) => {
  return (
    <PeopleTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth Year</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.gender}</td>
              <td>{person.birth_year}</td>
              <td>{person.mass}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </PeopleTableContainer>
  );
};

export default PeopleTable;

const PeopleTableContainer = styled.div`
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 4px 6px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f3f4f6;
    text-align: left;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;
