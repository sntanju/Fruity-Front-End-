import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import styled from "styled-components";

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-top: 0px ;
`;

const Wrapper = styled.div`
    display: flex;
    margin: 20px 20vw;
    padding: 25px;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;    
    color: PeachPuff;
    font-weight: 500;
    font-size: 18px;
    word-wrap: break-word;
    border: 3px dotted palevioletred;
`;
const UserContainer = styled.div``;

const UserItem = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 15px 20px;
    background-color: #32a19d;
    color: ghostwhite;
    font-weight: 900;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    `;

const EmptyUser = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    color: firebrick;
    height: 45vh;
    weight: 50vw;
    font-size: 35px;
    margin-top: 17vh;
    font-weight: bold; 
`

const ManageAllUsers = ({user}) => {

    const [allUsers, setAllUsers] = useState();

  useEffect(() =>  {
    const getAllUsers = async() => {
      const token = "Bearer " + user.accessToken;
      await axios({
        method: 'get',
        url: "http://localhost:5000/users/find_all",
        headers: {token},
      })
      .then((response) => {
        if(response.data.length === 0)  setAllUsers(null);
        else setAllUsers(response.data);
      }, (error) => {
        console.log(error);
      })
    }
    getAllUsers();
  }, []);

  //
  const handleMakeAdmin = async(item) => {

    const result = window.confirm(`Do You Really Want To Make Admin:  ${item.username}?`)
    if( !result ) return;

    const token = "Bearer " + user.accessToken;
    const Username = item.username;

    await axios({
      method: 'put',
      url: "http://localhost:5000/users/admin/make",
      headers: {token},
      data: {
        userName: Username
      }
    })
    .then((response) => {
      alert(`Username: ${item.username} Has Been Maiden Admin Successfully!!`)
      window.location.reload();
    }, (error) => {
      console.log(error);
    })
  };



    return (
        <Fragment>
            <Title>ALL USERS</Title>      
            {allUsers ? 
            <>
            {
                allUsers.map((item) => 
                    <Wrapper key = {item._id}>
                        <UserContainer>
                            <UserItem> User Email: {item.email} </UserItem>
                            <UserItem> Username: {item.username} </UserItem>
                            <UserItem> Joined At: {item.createdAt.slice(0, 10)} </UserItem>
                        </UserContainer>
                        <ButtonContainer>
                            <Button onClick={() => handleMakeAdmin(item)}>Make Admin</Button>
                        </ButtonContainer>
                    </Wrapper>   
                )
            }
            </>
            
            : 

            <>
                <EmptyUser>No User Available</EmptyUser>
            </>
            
            }
        </Fragment>
    );
};

export default ManageAllUsers;