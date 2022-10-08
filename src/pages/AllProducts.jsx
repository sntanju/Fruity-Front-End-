import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "../components/Product";

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductContainer = styled.div`
    width: 30%;
    margin: 15px 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AllProducts = () => {
  
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
    <Title>All Products</Title>
    <Container>
      {products.map((item) => 
      <ProductContainer key={item._id}>
        <Product item={item} ></Product>
          </ProductContainer>)}
    </Container>
    </>
  );
};

export default AllProducts;