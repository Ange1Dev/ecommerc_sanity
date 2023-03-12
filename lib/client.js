import sanityClient from "@sanity/client";



export const client = new sanityClient({
  projectId: "09ozkln6",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imageUrlBuilder = require("@sanity/image-url");
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
