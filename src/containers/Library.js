import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../store/actions/index";
import Input from "../components/Input";
import Tile from "../components/Tile";

const StyledLibrary = styled.div`
  padding: 1rem;
  height: 100vh;
  background-color: #eee;
  overflow-y: hidden;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  
  grid-gap: 1rem;
  height: 73vh;
  overflow: scroll;
  overflow-x: hidden;
  @media screen and (max-width:320px){
    height: 65vh;
  }
`;

const Library = (props) => {
  const deleteBookHandler = (title) => {
    props.onDeleteBook(title, props.bookLib);
  };

  const books = props.bookLib.map((book) => {
    if (book.title.startsWith(props.filteredWord)) {
      return (
        <Tile
          key={book.title}
          title={book.title}
          author={book.author}
          releaseYear={book.releaseYear}
          deleteBook={deleteBookHandler}
        />
      );
    }
  });
  return (
    <StyledLibrary>
      <StyledGrid>{books}</StyledGrid>
      <Input addBook={props.onAddBook} books={props.bookLib} />
    </StyledLibrary>
  );
};

const mapStateToProps = (state) => {
  return {
    bookLib: state.books,
    filteredWord: state.filteredWord,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBook: (title, author, releaseYear) => {
      dispatch(actions.addBook(title, author, releaseYear));
    },
    onDeleteBook: (title, bookLib) => {
      dispatch(actions.deleteBook(title, bookLib));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
