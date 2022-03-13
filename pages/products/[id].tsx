import React from "react";
import { useQuery } from "react-query";
import { Product } from "../../types";
import { fetcher, QueryKeys } from "../../shared/queryClient";
import { useRouter } from "next/router";

import ProductDetail from "../../src/component/product/detail";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  return (
    <>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </>
  );
};

export default ProductDetailPage;
