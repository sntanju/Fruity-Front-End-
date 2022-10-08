import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVhZBCySepDZ32CS5mc-VJ7UomjWPPKH0RqLDr6GX4FT5dmYlECaEF6aHYqN62_ZPIYk&usqp=CAU")
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
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
`;

const Title = styled.h1`
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
  min-width: 51%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const LinkStyle = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;
const ErrStyle = styled.p`
  width: 90%;
  color: red;
  margin: 0px;
  font-size: 15px;
`;
const LinkText = {
  "textDecoration": "none",
  "color": "black",
}

const Register = ({user, setUser}) => {

  const [errMsg, setErrMsg] = useState('');

  const postMessage = async (formUsername, formEmail, formPassword) => {
    await axios({
      method: 'post',
      url: "http://localhost:5000/auth/register",
      headers: {},
      data: {"username": formUsername,"email": formEmail, "password": formPassword}
    })
    .then((response) => {
      localStorage.setItem('Data', JSON.stringify(response.data));
      const date = Date.now();
      localStorage.setItem('CreateTime', date.toString());
      setUser(response.data);
    },(error) => {
      console.log(error);
      setErrMsg(error.response.data)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUsername = e.target.username.value;
    const formEmail = e.target.email.value;
    const formPassword = e.target.password.value;
    if(formUsername.length > 10) {
      setErrMsg("User name must be 1 to 10 characters");
      return;
    }
    postMessage(formUsername, formEmail, formPassword);
  };
  


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input id="username" placeholder="Username" name="username"  />
          <Input placeholder="Email" id="email" name="email" />
          <Input id="password" placeholder="Password" name="password" type="password"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {errMsg === ''? null : <ErrStyle>{errMsg}</ErrStyle>} 
          <Button type="submit">CREATE</Button> 
        </Form>
        <Link to="/signin" style={LinkText}>
            <LinkStyle>ALREADY HAVE AN ACCOUNT?</LinkStyle>
          </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;