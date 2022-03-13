import React from "react";
import Link from "next/link";
import { GnbList } from "./styles";

const Gnb = () => {
  return (
    <GnbList>
      <ul>
        <Link href="/">
          <a>홈</a>
        </Link>
        <Link href={"/products"}>
          <a>상품목록</a>
        </Link>
        <Link href={"/cart"}>
          <a>장바구니</a>
        </Link>
      </ul>
    </GnbList>
  );
};

export default Gnb;
