import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../../firebase'
import styled from 'styled-components'
import logoImg from '../../assets/home/logo-navbar.svg'
import aboutIcon from '../../assets/home/about.png'
import penIcon from '../../assets/home/pen.png'
import userIcon from '../../assets/home/user.png'
import arrowLeftIcon from '../../assets/left-arrow.png'

import '../../assets/css/fonts.css'

function NavBar() {
    const history = useHistory() 
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuthState()

    return (
      <Nav>
          <Logo>
            <img src={logoImg} alt="" />
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
              <span />
              <span />
              <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
              <button onClick={() => history.goBack()}> <img src={arrowLeftIcon} alt="" /> Go back</button>
              <button onClick={() => signOut(getAuth())}> Sign Out</button>
              <MenuLink href="#"> About <img src={aboutIcon} alt="" /></MenuLink>
              <MenuLink href="#"> Create your event <img src={penIcon} alt="" /></MenuLink>
              <MenuLink href="#"> {user?.email} <img src={userIcon} alt="" /></MenuLink>
          </Menu>
      </Nav>
    )
}

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #FFFFFC;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    height: 2px;
    width: 25px;
    background: #0097FF;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  margin-left: 2.5rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  
  img {
    width: 9rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 2rem;
  margin-top: 1rem;

  button {
      padding: 0.5rem;
      margin-right: 15px;
      border-width: 0px;
      background-color: #0099ffea;
      border-radius: 4px;
      color: #FFFFFC;
      cursor: pointer;
      transition: 0.5s;
      align-items: center;
      justify-content: center;
      display: flex;

      img {
        max-width: 0.8rem;
        max-height: 0.8rem;
      } 

      &:hover {
        background-color: #FFFFFC;
        color: #0099ffea;
        transform: translateY(-2px);

        border-left: none;
        border-right: none;
        border-top: none;
        border-width: 1px;
        border-radius: 0px;
        border-color: #0099ffea;
      }

  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px": "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #1b212a;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    color: #0099ffea;
  }

  img {
    width: 0.8rem;
    margin-bottom: -1px;
  }
`;

export default NavBar
