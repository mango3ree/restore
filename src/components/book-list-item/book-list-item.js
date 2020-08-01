import React, { Fragment } from 'react'
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price } = book;
  return (
    <Fragment>
      <span>
        {title}
      </span>
      <span>
        {author}
      </span>
      <span>
        $ {price}
      </span>
      <button
        onClick={onAddedToCart}
      >
        Add to cart
      </button>
    </Fragment>
  )
}

export default BookListItem
