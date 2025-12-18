import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";



// src/components/Navbar.jsx
function Navbar() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="navbar"> 
        {/* SOL: Logo */}
        <div className="navbar-left">
            <Link to ="/">
                <img src="/logo.png" alt="logo" className="logo-image"/>
                <div className="text-group">
                    <h1 className="logo-text">Paradise Nursery</h1>
                    <p className="logo-subtext">Where Green Meets Serenity</p>
                </div>
            </Link>
        </div>

        {/* ORTA: Plants Yazısı */}
        <div className="navbar-center">
            <Link to ="/products" className="plants-link">Plants</Link>
        </div>

        {/* SAĞ: Sepet */}
        <div className="navbar-right">
            <Link to ="/cart" className="cart-link">
                <div className="cart-icon-container">
                    <span className="cart-icon">🛒</span>
                    <span className="cart-count">{totalQuantity}</span>
                </div>
            </Link>
        </div>
    </nav>   
    );
}
export default Navbar; 