const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    error: error,
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());

  bookstoreService.getBooks()
    .then((data) => {
      dispatch(booksLoaded(data))
    })
    .catch((err) => {
      dispatch(booksError(err))
    })
}

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOKS_ADDED_TO_CART',
    payload: bookId
  }
}

const booksRemovedFromCart = (bookId) => {
  return {
    type: 'BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}

const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}


export {
  fetchBooks,
  bookAddedToCart
}
