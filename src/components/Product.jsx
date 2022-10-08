  import VisibilityIcon from "@mui/icons-material/Visibility";
  import styled from "styled-components";
  import {Link} from "react-router-dom";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 410px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 400px;
    background-color: white;
    position: absolute;
  `;
  
  const Title = styled.h2``;

  const Weight = styled.p`
    font-weight: bold;
  `;

  const Image = styled.img`
    width: 90%;
    height: 50%;
    z-index: 2;
  `;

  const Price = styled.p`
  font-weight: bold;
  `;
  
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle>
        <Title>{item.title}</Title>
        <Weight>{item.weight}</Weight>
        <Image src={item.img} />
        <Price>Price: ${item.price}</Price>
        </Circle>
        

        <Info>
          <Icon>
          <Link to={`/products/${item.title}`} state={{name:item}}>
            <VisibilityIcon />
            </Link>
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;