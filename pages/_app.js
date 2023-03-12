import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContex";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster></Toaster>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
