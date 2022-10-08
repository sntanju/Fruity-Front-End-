import React,{ useState } from 'react';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

    const Container = styled.div`
    width: 90%;
    display: flex;
    position: relative;
  `;
    const Title = styled.h1`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    `;
    const Weight = styled.h3`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  `;
    const Image = styled.img`
    flex: 1;
    margin: 20px;
    width: 33%;
    height: 50%;
    z-index: 2;
  `;
  const InfoContainer = styled.div`
    flex:1;
    margin: 20px;
    font-size: 20px;
  `;
    const Desc = styled.p`
    margin: 20px;
    font-size: 20px;
  `;
    const Price = styled.p`
    margin: 20px 20px 0px 20px;
    font-weight: bold;
  `;
    const Button = {
    "width": "40%",
    "border": "none",
    "padding": "15px 20px",
    "backgroundColor": "teal",
    "color": "white",
    "cursor": "pointer",
    "marginBottom": "10px",
    "fontWeight": "bold",
    "marginLeft": "20px",
    };
  const QuantityContainer = styled.p`
    display:flex;
    width: 40%;
    padding: 15px 20px;
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  `;
  const QuantityButton = {
    "backgroundColor": "white",
    "border": "1px solid black",
    "padding": "0px 10px",
    "color": "black",
    "cursor": "pointer",
    "marginBottom": "10px",
    "fontSize": "20px",
    "fontWeight": "bold",
  };

const ProductDetails = ({user}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const recivedProduct = location.state.name;
    const [quantity, setQuantity] = useState(1);

    const handlePlus = () => {
      if(quantity === 5) return;
      setQuantity(quantity+1);
    };

    const handleMinus = () => {
      if(quantity === 1) return;
      setQuantity(quantity-1);
    };

    const postMessage = async () => {
      const token = "Bearer " + user.accessToken;
      await axios({
        method: 'post',
        url: "https://calm-yak-sweatpants.cyclic.app/carts/add",
        headers: {token},
        data: {"username": user.username, "productname": recivedProduct.title, "weight": recivedProduct.weight, "img": recivedProduct.img, "price": recivedProduct.price, "quantity": quantity}
      })
      .then((response) => {
        alert("Product added to your cart successfully...");
      },(error) => {
        console.log(error)
      });
    };
  
    const handleCartClick = () => {
      if(!user){
        navigate("/signin");
      }
      else{
        postMessage();
      }
    };

    return (
        <>
            <Title>{recivedProduct.title}</Title>
            <Weight>{recivedProduct.weight}</Weight>
            <Container>
                <Image src={recivedProduct.img}></Image>
            <InfoContainer>
                <Desc>{recivedProduct.desc}</Desc>
                <Price>Price: ${recivedProduct.price}</Price>

                <QuantityContainer>
                  Quantity: &nbsp; &nbsp;
                  <button onClick={handleMinus} style={QuantityButton}>-</button>
                  &nbsp; &nbsp;
                  <span>{quantity}</span>
                  &nbsp; &nbsp;
                  <button onClick={handlePlus} style={QuantityButton}>+</button>
                </QuantityContainer>

                <button onClick={handleCartClick} style={Button}>
                  <AddShoppingCart/> Add To Cart</button>
                </InfoContainer>
             </Container>
                
        </>
    );
};

export default ProductDetails;