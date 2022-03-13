import React from "react";
import { Product } from "../../../types";
import { Item } from "./styles";
import Link from "next/link";

const ProductItem = ({
  id,
  title,
  price,
  category,
  image,
  rating,
}: Product) => {
  return (
    <Item>
      <Link href={`/products/${id}`}>
        <a>
          <span className={"prd-category"}>{category}</span>
          <b className={"prd-title"}>{title}</b>
          <img className={"prd-image"} src={image} alt="" />
          <span className={"prd-price"}>{price}</span>
          <span className={"prd-rating"}>{rating.rate}</span>
        </a>
      </Link>
    </Item>
  );
};

export default ProductItem;
