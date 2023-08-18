import * as React from "react";
import { CardProduct } from "../CardProduct";
import { Stack } from "@mui/material";

export default function ImgMediaCard() {
  const product = [
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
      name: "Nike Air Force 1 NDESTRUKT",
      color: ["#00ff00", "#000000"],
      price: 53.18,
      discount: 0,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
      name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
      color: ["#ffffff", "#000000"],
      price: 61.55,
      discount: 20,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
      name: "Nike Space Hippie 04",
      color: ["#00ff00", "#000000"],
      price: 52.21,
      discount: 0,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_12.jpg",
      name: "Nike Air Zoom BB NXT",
      color: ["#0000ff", "#ffffff"],
      price: 40.53,
      discount: 10,
    },
  ];

  return (
    <>
      {product.map((el) => (
        <CardProduct {...el}>
            {el.color.map(el => <Stack sx={{backgroundColor: `${el}`, width: 16, height: 16, borderRadius: '50%', marginLeft: '-4px', border: 2, borderColor: '#FCFAF9'}}></Stack>)}
        </CardProduct>
      ))}
    </>
  );
}
