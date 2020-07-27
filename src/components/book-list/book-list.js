import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from "../book-list-item"
import { bindActionCreators } from 'redux';
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

     fetchBooks();

    // let data = await bookstoreService.getBooks()
    // booksLoaded(data)
  }

  render() {
    const { books, loading, error } = this.props;

    if(loading) {
      return <Spinner/>
    }

    if(error) {
      return <ErrorIndicator/>
    }

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error,
})

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

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
