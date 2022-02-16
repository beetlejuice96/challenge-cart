import styled from "styled-components";
import { Product } from "../../types/products.response";

const Container = styled.div`
  height: 480px;
  width: 360px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

interface PropsSearchResults {
  productList: Product[];
}
const SearchResults = ({ productList }: PropsSearchResults): JSX.Element => {
  return (
    <Container>
      {productList ? (
        productList.map((product, index) => <div key={index}>product.name</div>)
      ) : (
        <div>empty</div>
      )}
    </Container>
  );
};

export default SearchResults;
