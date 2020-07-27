const initialState = {
  loading: false,
  error:false,
  books: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        error: false,
      }
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: false,
      }
    case 'BOOKS_ERROR':
      return {
        books: action.payload,
        loading: false,
        error: true,
      }

    default:
      return state;
  }

}

export default reducer;
