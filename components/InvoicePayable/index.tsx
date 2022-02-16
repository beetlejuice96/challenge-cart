import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
`;
const ContainerDate = styled.div`
  display: flex;
  flex-direction: row;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 11px;
`;

const InvoicePayable = (): JSX.Element => {
  return (
    <div>
      <Container>
        <ContainerDate>
          <Image src={"/carro.svg"} height={19} width={17} alt="carro" />
          <Text>
            Buy now and get it by <b>05/24/19</b>
          </Text>
        </ContainerDate>
        <OrderContainer>
          <Text>Products</Text>
          <Text>Shipping Cost</Text>
          <Text>Taxes</Text>
          <Text style={{ marginTop: "10px" }}>
            <b>Total</b>
          </Text>
        </OrderContainer>
      </Container>
    </div>
  );
};

export default InvoicePayable;
