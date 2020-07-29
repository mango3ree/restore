const initialState = {
  loading: false,
  error:false,
  books: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: false,
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: false,
      }
    case 'FETCH_BOOKS_FAILURE':
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
