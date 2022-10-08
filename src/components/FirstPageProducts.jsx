import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FirstPageProducts = () => {
  
  const [products, setProducts] = useState([]);
  useEffect(() =>  {
    const getProducts = async () => {
      try{
        const res = await axios.get ( "http://localhost:5000/products/find_all" );
        setProducts(res.data);
      }
      catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <>
    <Title>Popular Products</Title>
    <Container>
      {products.slice(5, 9).map(item => <Product item={item} key={item._id}></Product>)}
    </Container>
    <Title>Top Products</Title>
    <Container>
      {products.slice(0, 4).map(item => <Product item={item} key={item._id}></Product>)}
    </Container>
    </>
  );
};

export default FirstPageProducts;