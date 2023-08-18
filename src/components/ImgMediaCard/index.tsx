import * as React from "react";
import { CardProduct } from "../CardProduct";
import { Grid, Stack } from "@mui/material";

export default function ImgMediaCard() {
  const product = [
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
      name: "Nike Air Force 1 NDESTRUKT",
      colors: ["#00ff00", "#000000"],
      price: 53.18,
      discount: 0,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
      name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
      colors: ["#ffffff", "#000000"],
      price: 61.55,
      discount: 20,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
      name: "Nike Space Hippie 04",
      colors: ["#00ff00", "#000000"],
      price: 52.21,
      discount: 0,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_12.jpg",
      name: "Nike Air Zoom BB NXT",
      colors: ["#ffffff", "#ff0000"],
      price: 40.53,
      discount: 10,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg",
      name: "Nike Air Zoom BB NXT",
      colors: ["#ffffff", "#ff0000"],
      price: 22.88,
      discount: 5,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_5.jpg",
      name: "Nike Air Zoom BB NXT",
      colors: ["#ffffff", "#ff0000"],
      price: 34.82,
      discount: 5,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg",
      name: "Nike Air Zoom BB NXT",
      colors: ["#aaa", "#ff0000"],
      price: 14.28,
      discount: 5,
    },
    {
      img:
        "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
      name: "Nike Air Zoom BB NXT",
      colors: ["#000", "#ff0000"],
      price: 44.88,
      discount: 5,
    },
  ];

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {product.map((el, index) => (
            <Grid item xs={4} sm={4} md={3} key={index}>
                <CardProduct {...el}>
                    {el.colors.map((color, index) => <Stack key={index} sx={{backgroundColor: `${color}`, boxShadow: `rgba(0, 0, 0, 0.24) -1px 1px 2px inset`, width: 16, height: 16, borderRadius: '50%', marginLeft: '-6px', border: 2, borderColor: '#fff'}}></Stack>)}
                </CardProduct>
            </Grid>
        ))}
      </Grid>
    </>
  );
}
