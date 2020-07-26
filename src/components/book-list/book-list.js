import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from "../book-list-item";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from "../../actions";
import Spinner from "../spinner";

class BookList extends Component {
  async componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;

    // bookstoreService.getBooks()
    //   .then((data) => {
    //     booksLoaded(data)
    //   })

    let user = await booksLoaded([data])
  }

  render() {
    const { books, isLoading } = this.props;

    if(isLoading) {
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

const mapStateToProps = ({ books, isLoading }) => ({
  books,
  isLoading
})

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks))
    }
  }
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
