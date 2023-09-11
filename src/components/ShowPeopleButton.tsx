import React from "react";
import styled from "styled-components";

interface ShowPeopleButtonProps {
  onShowPeopleClick: () => void;
}

const ShowPeopleButton: React.FC<ShowPeopleButtonProps> = ({
  onShowPeopleClick,
}) => {
  return (
    <StyledButton
      data-testid='people-button'
      onClick={() => onShowPeopleClick()}
    >
      Show People
    </StyledButton>
  );
};

export default ShowPeopleButton;

const StyledButton = styled.button`
  background-color: #0077b6;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005086;
  }

  &:disabled {
    background-color: #a3a3a3;
    cursor: not-allowed;
  }
`;
