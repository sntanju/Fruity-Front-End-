import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 15px 0px;
    color: darkcyan;
`;
const Wrapper = styled.div`
    margin: 10px 15vw 5vh 15vw;
    height: 48vh;
    font-size: 20px;
    word-spacing: 10px;
    word-break: break-all
    font-weight: 9px;
`;
const Bold = styled.span`
    font-weight: 700;
`;

const About = () => {
    return (
        <Fragment>
            <Title>About Us</Title>
            <Wrapper>
                <Bold>FRUITY</Bold> is an online based Fruit selling platform which ensures the best service to consumers in the most satistying style. Fruity is hoping to create a healthy nation through bringing out nutrition to the people in the easiest possible way. As a result, FRUITY defines the most reasonable price compared to the other competitor in market and also guarantees the best survice to the customers. We know, There is a provab as "Health is Wealth" and <Bold>FRUITY</Bold> is trying to be the best supplier of that wealth. Finally, "Good health and good sense are two of life's greatest blessings" and therefore good fruits makes good health so is <Bold>FRUITY</Bold> to provide fruits in your hand in the best way.
            </Wrapper>
        </Fragment>
    );
};

export default About;