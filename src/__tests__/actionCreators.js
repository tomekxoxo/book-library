import * as actions from "../store/actions/index";
import * as actionTypes from "../store/actions/actionTypes";

describe("actionCreators", () => {
  it("should create an action to add a book", () => {
    const book = {
      title: "Designing Evolvable Web APIs with ASP.NET",
      author: "Glenn Block, et al.",
      releaseYear: "2014",
    };
    const expectedAction = {
      type: actionTypes.ADD_BOOK,
      book,
    };
    expect(actions.addBook(book.title, book.author, book.releaseYear)).toEqual(
      expectedAction
    );
  });

  it("should create an action to filter books", () => {
    const word = "BOOK";
    const expectedAction = {
      type: actionTypes.FILTER_BOOKS,
      word,
    };
    expect(actions.filterBooks(word)).toEqual(expectedAction);
  });

  it("should delete choosen book", () => {
    const entryLibrary = [
      { title: "title1", author: "author1", releaseYear: 1 },
      { title: "title2", author: "author2", releaseYear: 2 },
      { title: "title3", author: "author3", releaseYear: 3 }
    ];
    const outputLibrary = [
      { title: "title1", author: "author1", releaseYear: 1 },
      { title: "title3", author: "author3", releaseYear: 3 }
    ];
    const title = "title2";
    const expectedAction = {
      type: actionTypes.DELETE_BOOK,
      library:outputLibrary,
    };
    expect(actions.deleteBook(title, entryLibrary)).toEqual(expectedAction);
  });
});
