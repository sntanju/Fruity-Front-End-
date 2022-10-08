import React, { Fragment } from 'react';
import { BsDiscord, BsFillTelephonePlusFill } from 'react-icons/bs';
import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaSnapchatSquare} from 'react-icons/fa';
import { ImMail, ImOffice } from 'react-icons/im';
import { TbSocial } from 'react-icons/tb';
import { RiUserLocationFill } from 'react-icons/ri';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 10px 0px;
    color: darkcyan;
`;
const SocialContainer = styled.div`
    width: 50vw;
    height: 60vh;
    margin-left: 22vw;
    font-weight: bold;
`;
const OfficeContainer = styled.div`
    width: 50vw;
    height: 70vh;
    margin-right: 22vw;
    font-weight: bold;
`;
const H2 = styled.h2`
    color: saddlebrown;
`;
const H3 = styled.h3``;

const Span = styled.span`
    color: ${(props) => props.bg};
`;

const Wrapper = styled.div`
    display: flex;
`;
const Ancor = styled.a`
    text-decoration: none; 
    color: ${(props) => props.bg};
    
`;


const Contact = () => {
    return (
        <Fragment>
            <Title>Contact Us</Title>
            <Wrapper>
                <SocialContainer>
                    <H2><TbSocial/> Social Links </H2>
                    <H3><Ancor bg="tomato" href="https://mail.google.com/mail/u/?authuser=sntanju07@gmail.COM"> <ImMail/>Mail</Ancor></H3>

                    <H3><Ancor bg="blue" href="https://www.facebook.com/sntanju07"> <FaFacebookSquare/>Facebook</Ancor></H3>

                    <H3><Ancor bg="lightSeaGreen" href="#"> <FaTwitterSquare/>Twitter</Ancor></H3>

                    <H3><Ancor bg="lightSalmon" href="#"> <FaInstagramSquare/>Instagram</Ancor></H3>

                    <H3><Ancor bg="orange" href="#"> <FaSnapchatSquare/>Snapchat</Ancor></H3>

                    <H3><Ancor bg="dodgerBlue" href="#"> <FaLinkedin/>LinkedIn</Ancor></H3>

                    <H3><Ancor bg="darkCyan" href="#"> <BsDiscord/>Discord</Ancor></H3>

                    <H3><Ancor bg="limeGreen" href="#"> <FaWhatsappSquare/>Whatsapp</Ancor></H3>

                </SocialContainer>
                <OfficeContainer>
                <H2><ImOffice/> Address & Cell </H2>
                <H3> <Span bg="darkOrchid"><BsFillTelephonePlusFill/> Cell: +14 90 7</Span></H3>
                <H3> <Span bg="oliveDrab"> <RiUserLocationFill/> Office: 30/7 Bairag, Anowara CTG </Span> </H3>
                </OfficeContainer>
            </Wrapper>

        </Fragment>
    );
};

export default Contact;