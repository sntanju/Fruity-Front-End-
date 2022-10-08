import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 60vh;
    align-items: center;
    justify-content: center;
    display: flex;
    color: orange;
    font-size: 50px;
    font-weight: bold;
`;

const NotFound = () => {
    return (
        <Container>
            404 Page Not Found
        </Container>
    );
};

export default NotFound;