import React, { useState } from "react";
import Filter from "./Filter";
import styled from "styled-components";
import Button from "./Button";

const StyledInputs = styled.div`
  display: flex;
  height: 27vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    input {
      flex-grow: 1;
      padding: 0.5rem;
      border: 2px solid black;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 320px) {
    height: 35vh;
  }
`;

const Input = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const addBookHandler = () => {
    if (title.length > 0 && author.length > 0 && year) {
      checkIfDuplicated(title);
      clearInputs();
    } else {
      alert("Fill all inputs");
    }
  };
  const checkIfDuplicated = (title) => {
    let duplicated = false;
    props.books.forEach((filtered) => {
      if (filtered.title === title) {
        alert("You have this book already");
        duplicated = true;
      }
    });
    !duplicated && props.addBook(title, author, year);
  };
  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setYear("");
  };
  return (
    <StyledInputs>
      <form>
        <input
          required
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          required
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input
          required
          type="number"
          placeholder="Year of Release"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <Filter />
      </form>
      <Button type="submit" color="#23272b" clickAction={addBookHandler}>
        add
      </Button>
    </StyledInputs>
  );
};

export default Input;
