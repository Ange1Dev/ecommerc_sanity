import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discuount,
    largeText,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discuount}% OFF</p>
          <h3>{largeText}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText} </h3>
          <p>{desc} </p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className='footer-banner-image' alt={largeText}>
          
        </img>
      </div>
    </div>
  );
};

export default FooterBanner;
