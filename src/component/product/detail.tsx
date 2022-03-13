import React from "react";
import { Product } from "../../../types";

const ProductDetail = ({
  item: {
    title,
    price,
    description,
    category,
    image,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <img src={image} alt="" />
      <b>{price}</b>
      <span>{rate}</span>
    </div>
  );
};

export default ProductDetail;
