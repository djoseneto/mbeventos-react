import React, { useState } from 'react'
import styled from 'styled-components'
import logoImg from '../../assets/home/logo-navbar.svg'
import aboutIcon from '../../assets/home/about.png'
import penIcon from '../../assets/home/pen.png'
import userIcon from '../../assets/home/user.png'

import '../../assets/css/fonts.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

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
              <MenuLink href="#"> About <img src={aboutIcon} alt="" /></MenuLink>
              <MenuLink href="#"> Create your event <img src={penIcon} alt="" /></MenuLink>
              <MenuLink href="#"> Your Name <img src={userIcon} alt="" /></MenuLink>
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
