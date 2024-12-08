import styled from "styled-components";
import React from "react";
import './searchbox.css'

//dynamic css using styled-components.
const StyledSearchBox = styled.input`
  width: 100%;
  min-width: 400px;
  height: 2rem;
  min-height: 40px;
  padding: 0.5rem 1rem;
  border: 5px;
  border-radius: 20px;
  font-size: 1rem;
`;

const StyledSearchContainer = styled.div`
  position: absolute;
  top: 15px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function SearchBoxComponent() {
  return (
    <StyledSearchContainer className="mainSearchContainer">
      <StyledSearchBox className="inBoxContainer"
        type="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search..."
      />
    </StyledSearchContainer>
  );
}
