import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0px 5px 5px 5px;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-top: 0px ;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductWeight = styled.span``;

const Price = styled.span``;

const Quantity = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RemoveProduct = styled.button`
  background-color: brown;
  color: papayawhip;
  font-size: 18px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: gray;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const OrderButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: mediumseagreen;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const ClearButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: tomato;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
`;

const EmptyCartContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: firebrick;
  height: 45vh;
  weight: 50vw;
  font-size: 35px;
  margin-top: 17vh;
  font-weight: bold;
`

const Cart = ({user}) => {
  
  let calculatedTotal = 0;
  const [userCart, setUserCart] = useState();

  useEffect(() =>  {
    const getCart = async() => {
      const token = "Bearer " + user.accessToken;
      await axios({
        method: 'get',
        url: `https://calm-yak-sweatpants.cyclic.app/carts/find/${user.username}`,
        headers: {token},
      })
      .then((response) => {
        if(response.data.length === 0)  setUserCart(null);
        else setUserCart(response.data);
      }, (error) => {
        console.log(error);
      })
    }
    getCart();
  }, []);

  const calculateTotal = (item) => {
    calculatedTotal += (item.price * item.quantity)
    return null;
  }

  const removeFromCart = async (cartProductId) => {
    const token = "Bearer " + user.accessToken;
      await axios({
        method: 'delete',
        url: `https://calm-yak-sweatpants.cyclic.app/carts/delete/${cartProductId}`,
        headers: {token},
      })
      .then((response) => {
        alert("Product Removed Successfully...");
        window.location.reload();
      },(error) => {
        console.log(error)
      });
  }

  const handleRemove = (cartProductId) => {
    removeFromCart(cartProductId)
  };

  const handleClearCart = async(showAlert = true) => {
    let result; 
    if(showAlert){
      result = window.confirm("Want To Clear Your Cart?");
    }
    else result = true;
    if(result) {
      const token = "Bearer " + user.accessToken;
      await axios({
        method: 'delete',
        url: `https://calm-yak-sweatpants.cyclic.app/carts/clear/${user.username}`,
        headers: {token},
      })
      .then((response) => {
        if(showAlert) alert("Cleared Cart Successfully...");
        window.location.reload();
      },(error) => {
        console.log(error)
      });
    }
    else return;  
  };

  const handleOrderNow = async () => {

    let userAddress = window.prompt("Enter Your Delivery Address: ");
    let userPhone = window.prompt("Enter Your Phone Number: ");
    const amountTotal = calculatedTotal + 4;

    if(userAddress && userPhone){
      const token = "Bearer " + user.accessToken;
      await axios({
        method: 'post',
        url: `https://calm-yak-sweatpants.cyclic.app/orders/add`,
        headers: {token},
        data: { "username": user.username, "elements": userCart, "address": userAddress, "phone": userPhone, "amount": amountTotal }
      })
      .then((response) => {
        alert("Order Placed Successfully...");
        handleClearCart(false);
        window.location.reload();
      },(error) => {
        console.log(error)
      });
    }
  }
  
  return (
    <Container>
      {userCart ? 
      
      <Wrapper>
        <Title>YOUR CART</Title>      
        <Bottom>
          <Info>
            {userCart.map((item) =>
            <Fragment key={item._id}>
              <Product>
                <ProductDetail>
                  <Image src={item.img} />
                  <Details>

                    <ProductName>
                      <b>Product:</b>   {item.productname}
                    </ProductName>
                    <ProductWeight>
                      <b>Weight:</b>   {item.weight}
                    </ProductWeight>
                    <Price>
                      <b> Price:</b>   ${item.price}
                    </Price>          
                    <Quantity>
                      <b >Quantity:</b>  {item.quantity} 
                    </Quantity>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductRemoveContainer>
                    <RemoveProduct onClick={() => {handleRemove(item._id)}}>Remove</RemoveProduct>
                  </ProductRemoveContainer>
                  <ProductPrice>$ { item.price * item.quantity} </ProductPrice>
                </PriceDetail>
              {calculateTotal(item)}
            </Product>    
            <Hr />    
          </Fragment>   
        )}
 
          </Info>
          <Summary>
            <SummaryTitle>CART SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {calculatedTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Fee</SummaryItemText>
              <SummaryItemPrice>$ 4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ { calculatedTotal + 4 }</SummaryItemPrice>
            </SummaryItem>
            <OrderButton onClick={handleOrderNow}>ORDER NOW</OrderButton>
            <ClearButton onClick={handleClearCart}>CLEAR CART</ClearButton>
          </Summary>
        </Bottom>
      </Wrapper> 

      : <EmptyCartContainer>Your Cart Is Empty!</EmptyCartContainer>
      }
    </Container>
  );
};

export default Cart;