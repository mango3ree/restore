import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from "../book-list-item"
import { bindActionCreators } from 'redux';
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded, booksRequested } from "../../actions";
import Spinner from "../spinner";

class BookList extends Component {
  async componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();

    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data)
      })

    // let data = await bookstoreService.getBooks()
    // booksLoaded(data)
  }

  render() {
    const { books, loading } = this.props;

    if(loading) {
      return <Spinner/>
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

const mapStateToProps = ({ books, loading }) => ({
  books,
  loading
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded, booksRequested
  }, dispatch)
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
