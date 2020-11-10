import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledTile = styled.div`
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Tile = (props) => {
  return (
    <StyledTile>
      <h1>Title:{props.title}</h1>
      <h2>Author:{props.author}</h2>
      <h3>Year:{props.releaseYear}</h3>
      <Button color="#c82333" clickAction={() => props.deleteBook(props.title)}>
        delete
      </Button>
    </StyledTile>
  );
};

export default Tile;
