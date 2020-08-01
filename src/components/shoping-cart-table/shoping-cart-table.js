import React from 'react'
import { connect } from 'react-redux'


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total, price } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDecrease(id)}
          >
            decrease
          </button>
          <button
            onClick={() => onIncrease(id)}
          >
            increase
          </button>
          <button
            onClick={() => onDelete(id)}
          >
            delete
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <tbody>
        {items.map(renderRow)}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase ${id}`)
    },
    onDecrease: (id) => {
      console.log(`Decrease ${id}`)
    },
    onDelete: (id) => {
      console.log(`Delete ${id}`)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
