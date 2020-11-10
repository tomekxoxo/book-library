import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: [
    {
      title: "Eloquent JavaScript, Second Edition",
      author: "Marijn Haverbeke",
      releaseYear: "2014",
    },
    {
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      releaseYear: "2012",
    },
    {
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
      releaseYear: "2014",
    },
    {
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      releaseYear: "2014",
    },
    {
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      releaseYear: "2016",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      releaseYear: "2015",
    },
    {
      title: "Git Pocket Guide",
      author: "Richard E. Silverman",
      releaseYear: "2013",
    },
    {
      title: "Designing Evolvable Web APIs with ASP.NET",
      author: "Glenn Block, et al.",
      releaseYear: "2014",
    },
  ],
  filteredWord: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK: {
      return {
        ...state,
        books: [...state.books, action.book],
      };
    }
    case actionTypes.DELETE_BOOK: {
      return {
        ...state,
        books: action.library,
      };
    }
    case actionTypes.FILTER_BOOKS: {
      return {
        ...state,
        filteredWord: action.word,
      };
    }
    default:
      return state;
  }
};

export default reducer;
