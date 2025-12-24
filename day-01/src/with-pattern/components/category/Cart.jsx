const Cart = ({ cartCount }) => {
  return (
    <div className="cart-summary">
      <h3>Cart</h3>

      <div className="cart-item">
        <span>Total Items</span>
        <span>{cartCount}</span>
      </div>
    </div>
  )
}

export default Cart
