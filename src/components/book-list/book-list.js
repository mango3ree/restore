import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, bookAddedToCart } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();

    // let data = await bookstoreService.getBooks()
    // booksLoaded(data)
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => {
      dispatch(bookAddedToCart(id));
    },
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks))
//     },
//     booksRequested: () => {
//       dispatch(booksRequested())
//     }
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     booksLoaded, booksRequested, booksError
//   }, dispatch)
// }
