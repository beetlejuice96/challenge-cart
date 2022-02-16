import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  height: 480px;
  width: 360px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
`;

const SecondText = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;
const AddedProducts = (): JSX.Element => {
  return (
    <Container>
      <Image src={"/cart.svg"} height={45} width={53} alt="cart" />
      <Text>Your cart is empty</Text>
      <SecondText>Seems like you haven’t chosen what to buy...</SecondText>
    </Container>
  );
};

export default AddedProducts;
