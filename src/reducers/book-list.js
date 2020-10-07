const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      bookList: {
        books: [],
        loading: true,
        error: null,
      },
    };
  }

  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        books: [],
        loading: true,
        error: false,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        books: action.payload,
        loading: false,
        error: false,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        books: action.payload,
        loading: false,
        error: true,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
