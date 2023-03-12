import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContex";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    ;
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill></BsBagCheckFill>
        </p>
        <h2>Than you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="angelrieveromiguelgiron@gmail.com">
            angelrieveromiguelgiron@gmail
          </a>
        </p>
        {runFireworks()}
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
