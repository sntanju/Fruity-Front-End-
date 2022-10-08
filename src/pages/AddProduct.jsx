import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 75vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-fluid-gradient-colorful-fluid-round-banner-background-image_221896.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  font-weight: bold;
  box-shadow: -5px -5px 20px 5px red, 5px 5px 30px 5px blue;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  min-width: 91%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 20px;
  background-color: peru;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const ErrStyle = styled.p`
  width: 90%;
  color: red;
  margin: 0px;
  font-size: 15px;
`;

const AddProduct = ({user}) => {

  const [errMsg, setErrMsg] = useState('');

  const postMessage = async (Title, Weight, Desc, Img, Price) => {

    const token = "Bearer " + user.accessToken;

    await axios({
      method: 'post',
      url: "https://calm-yak-sweatpants.cyclic.app/products/add",
      headers: {token},
      data: {"title": Title,  "weight": Weight,  "desc": Desc,   "img": Img,   "price": Price}
    })
    .then((response) => {
      alert("Product Added Successfully!");
      window.location.reload();
      
    },(error) => {
      console.log(error);
      setErrMsg(error.response.data)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Title = e.target.title.value;
    const Weight = e.target.weight.value;
    const Desc = e.target.desc.value;
    const Img = e.target.img.value;
    const Price = e.target.price.value;
    if(Title.length > 25) {
      setErrMsg("Title must be in 25 character Length.");
      return;
    }
    if(Weight.length > 10) {
      setErrMsg("Weight must be in 10 character Length.");
      return;
    }
    postMessage(Title, Weight, Desc, Img, Price);
  };
  


  return (
    <Container>
      <Wrapper>
        <Title>ADD PRODUCT</Title>
        <Form onSubmit={handleSubmit}>
          <Input id="title" placeholder="Title" name="title"  />
          <Input id="weight" placeholder="Weight" name="weight" />
          <Input id="desc" placeholder="Description" name="desc" />
          <Input id="img" placeholder="Image Link" name="img" />
          <Input id="price" placeholder="Price" name="price" type="number"/>
        
          {errMsg === ''? null : <ErrStyle>{errMsg}</ErrStyle>} 
          <Button type="submit">ADD PRODUCT</Button> 
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;