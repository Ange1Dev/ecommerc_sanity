import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContex";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    onRemove,
    setShowCart,
    toggleCartItemQuantity,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( cartItems ),
    });

    if (response.status === 500) {
      console.error("Error creating Stripe session:", await response.text());
      toast.error("An error occurred while creating the checkout session. Please try again later.");
      return;
    }

    console.log(response)

    const data = await response.json();

    console.log(data);

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft></AiOutlineLeft>
          <span className="heading">Your Cart</span>
          <span className="cart-num-tems">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empity-cart">
            <AiOutlineShopping size={150}></AiOutlineShopping>
            <h3>Yuor shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Contiene Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                ></img>

                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus></AiOutlineMinus>
                        </span>
                        <span className="num">
                          {item.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus></AiOutlinePlus>
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline></TiDeleteOutline>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick={handleCheckout}>
                  Pay With Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
