import type { NextPage } from "next";
import AddedProducts from "../components/Cart";
import InvoicePayable from "../components/InvoicePayable";
import SearchProduct from "../components/SearchProduct";
import SearchResults from "../components/SearchResults";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
const ContainerSearchCart = styled.div`
  display: flex;
  flex-direction: column;
`;

type Product = {
  name: string;
  price: number;
  stock: number;
};

const Cart: NextPage = () => {
  const [productList, setproductList] = useState<Product[]>([]);

  return (
    <Container>
      <ContainerSearchCart>
        <SearchProduct setproductList={setproductList} />
        {productList.length > 0 ? (
          <SearchResults productList={productList} />
        ) : (
          <AddedProducts />
        )}
      </ContainerSearchCart>
      <InvoicePayable />
    </Container>
  );
};

export default Cart;
