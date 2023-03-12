import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContex";
import { runFireworks } from "../lib/utils";

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

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
        </p>
        <h2>Your canceled </h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="angelrieveromiguelgiron@gmail.com">
            angelrieveromiguelgiron@gmail
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Volver a Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
