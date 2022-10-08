import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: .6rem;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
`;
const UserStyle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-left: 25px;
  color: blue;
`;
const LinkStyle = {
  "textDecoration": "none",
  "color": "black"
}

const Navbar = ({user, setUser}) => {

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
  }

  return (
    <Fragment>
    {user && user.isAdmin === false ? 
      <Fragment>
        <Container>
          <Wrapper>
            <Left>
            <Logo>FRUITY</Logo>
            </Left>
            <Right>

              <Link to="/" style={LinkStyle}><MenuItem>HOME</MenuItem></Link>

              <Link to="/allproducts" style={LinkStyle}><MenuItem>PRODUCTS</MenuItem></Link>

              <Link to="/contact" style={LinkStyle}><MenuItem>CONTACT</MenuItem></Link>

              <Link to="/about" style={LinkStyle}><MenuItem>ABOUT</MenuItem></Link>

              <Link to="/orders" style={LinkStyle}><MenuItem>ORDERS</MenuItem></Link>
              {
                !user? <>
                <Link to="/register" style={LinkStyle}><MenuItem>REGISTER</MenuItem></Link>
                <Link to="/signin" style={LinkStyle}><MenuItem>SIGN-IN</MenuItem></Link></> 
                : <MenuItem onClick={handleSignOut}>SIGN-OUT</MenuItem>
              }         
              
              <Link to="/cart" style={LinkStyle}><MenuItem>
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem></Link>
            {user? <UserStyle>{user.username}</UserStyle> : null}
            </Right>
          </Wrapper>
        </Container>
      </Fragment> 

      : 
      <>
      {user && user.isAdmin === true ? 
      <>
      <Fragment>
        <Container>
          <Wrapper>
            <Left>
            <Logo>FRUITY</Logo>
            </Left>
            <Right>

              <Link to="/" style={LinkStyle}><MenuItem>HOME</MenuItem></Link>

              <Link to="/allproducts" style={LinkStyle}><MenuItem>PRODUCTS</MenuItem></Link>

              <Link to="/contact" style={LinkStyle}><MenuItem>CONTACT</MenuItem></Link>

              <Link to="/about" style={LinkStyle}><MenuItem>ABOUT</MenuItem></Link>
        
              <Link to="/addproduct" style={LinkStyle}><MenuItem>ADD-PRODUCT</MenuItem></Link>

              <Link to="/allusers" style={LinkStyle}><MenuItem>ALL-USERS</MenuItem></Link>

              <Link to="/allorders" style={LinkStyle}><MenuItem>ALL-ORDERS</MenuItem></Link>
              {
                !user? <>
                <Link to="/register" style={LinkStyle}><MenuItem>REGISTER</MenuItem></Link>
                <Link to="/signin" style={LinkStyle}><MenuItem>SIGN-IN</MenuItem></Link></> 
                : <MenuItem onClick={handleSignOut}>SIGN-OUT</MenuItem>
              }         
              
            {user? <UserStyle>{user.username}</UserStyle> : null}
            </Right>
          </Wrapper>
        </Container>
      </Fragment>
      </> 
      : 
      <>
       <Fragment>
        <Container>
          <Wrapper>
            <Left>
            <Logo>FRUITY</Logo>
            </Left>
            <Right>

              <Link to="/" style={LinkStyle}><MenuItem>HOME</MenuItem></Link>

              <Link to="/allproducts" style={LinkStyle}><MenuItem>PRODUCTS</MenuItem></Link>

              <Link to="/contact" style={LinkStyle}><MenuItem>CONTACT</MenuItem></Link>

              <Link to="/about" style={LinkStyle}><MenuItem>ABOUT</MenuItem></Link>

              <Link to="/orders" style={LinkStyle}><MenuItem>ORDERS</MenuItem></Link>
              {
                !user? <>
                <Link to="/register" style={LinkStyle}><MenuItem>REGISTER</MenuItem></Link>
                <Link to="/signin" style={LinkStyle}><MenuItem>SIGN-IN</MenuItem></Link></> 
                : <MenuItem onClick={handleSignOut}>SIGN-OUT</MenuItem>
              }         
              
              <Link to="/cart" style={LinkStyle}><MenuItem>
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem></Link>
            {user? <UserStyle>{user.username}</UserStyle> : null}
            </Right>
          </Wrapper>
        </Container>
      </Fragment> 
      </>
      }
      </>
      }

    </Fragment>
  );
};

export default Navbar;