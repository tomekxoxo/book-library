import * as actionTypes from "./actionTypes";

export const addBook = (title, author, releaseYear) => {
  return {
    type: actionTypes.ADD_BOOK,
    book: { title, author, releaseYear },
  };
};

export const deleteBook = (title, library) => {
  const newLibrary = library.filter((book) => {
    return book.title !== title && book;
  });

  return {
    type: actionTypes.DELETE_BOOK,
    library: newLibrary,
  };
};

export const filterBooks = (word) => {
  return {
    type: actionTypes.FILTER_BOOKS,
    word,
  };
};
