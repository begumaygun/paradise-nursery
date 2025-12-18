// src/pages/CartItem.jsx
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "../cartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart-page-wrapper"> 
    <div className="cart-overlay"></div>
      <div className="cart-main-container">
        <h2 className="cart-total-title">Total Cart Amount: ${totalAmount}</h2>
        
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-unit-price">${item.price}</p>
                
                <div className="quantity-buttons">
                  <button className="q-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <span className="q-count">{item.quantity}</span>
                  <button className="q-btn" onClick={() => dispatch(addToCart(item))}>+</button>
                </div>

                <p className="cart-item-subtotal">Total: ${item.price * item.quantity}</p>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer-buttons">
          <button className="nav-btn green-btn" onClick={() => window.location.href='/products'}>
            Continue Shopping
          </button>
          <button className="nav-btn green-btn" onClick={() => alert('Coming Soon!')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;