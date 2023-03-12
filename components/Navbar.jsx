import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../context/StateContex";
import Cart from "./Cart";


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Store | Headphones</Link>
      </p>
      <button
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping></AiOutlineShopping>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart></Cart> }
    </div>
  );
};

export default Navbar;
