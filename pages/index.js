import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import React from "react";
import HomeBanner from "../components/HomeBanner";
import FooterBanner from "../components/FooterBanner";

import { client } from "../lib/client";
import Product from "../components/Product";


export default function Home({products, bannerData}) {
  return (
    <>
      <HomeBanner heroBanner={bannerData.length ? bannerData[0] : ""}></HomeBanner>
      {/* {console.log(bannerData[0])} */}

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Spaaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}></Product>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const banneQuery = await '*[_type == "banner"]';
  const bannerData = await client.fetch(banneQuery)

  return {
    props: {products, bannerData}
  }
}