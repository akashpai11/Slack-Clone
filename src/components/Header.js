import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import SearchIcon from "@material-ui/icons/Search";

function Header({ user, signOut, theme }) {
  return (
    <Container>
      <Main>
        <SlackImg
          onClick={() => (window.location.href = "/")}
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="logo"
        />
        <button onClick={theme}>Change Theme</button>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search" />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "https://imgur.com/6VBx3io"}
            alt="user"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #3f0f3f;
  color: #fafafa;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  align-items: center;
  button {
    padding: 5px;
    border: none;
    margin-right: 10px;
    color: black;
    border-radius: 20px;
    background: #80d2de;
    font-weight: 700;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  width: 100%;

  box-shadow: inset 0 0 0 1px rgb(82, 82, 82);
  border-radius: 6px;
  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #fafafa;
  }
  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
  font-family: Poppins;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
const SlackImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 400px;
  cursor: pointer;
`;
