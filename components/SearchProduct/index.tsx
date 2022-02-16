import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import productsService from "../../services/products.service";

const Input = styled.input`
  width: 360px;
  height: 48px;
  radius: 4px;
  border: 1px solid #dddddd;
  background: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #333333;
`;

type Product = {
  name: string;
  price: number;
  stock: number;
};
interface PropsSearch {
  setproductList: Dispatch<SetStateAction<Product[]>>;
}

const SearchProduct = ({ setproductList }: PropsSearch) => {
  const handleChange = async (e: any) => {
    let response = await productsService.getProductsMatch({
      query: e.target.value,
    });
    if (response.success) {
      setproductList(response.payload);
    } else {
      alert("Error!");
    }
  };

  return <Input placeholder="Search Products" onChange={handleChange} />;
};

export default SearchProduct;
