import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {FaHeart, FaSearch} from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
    background-color: #333;
    }
`;

const NavigationAside = styled.aside`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #0E0E0E;
    width: 260px;
    transform: ${({showNav}) => showNav ? "translateX(0)" : "translateX(260px)"};
    transition: transform .2s linear;

`;

const NavigationWrapper = styled.nav`

ul{
    text-align: right;
    margin-top: 80px;
    margin-right: 40px;
    list-style: none;
    color: white;
    font-family: "Muli" ,sans-serif; 
    font-size: 18px;
    line-height: 50px;

}`

const NavigationHamburger = styled.button`

    position: fixed;
    top: 25px;
    right: 25px;
    transition: .2s linear;
    cursor: pointer;
    background-color: transparent;
    z-index: 1;
    border: none;
    display: inline-block;
`

const NavigationHamburgerBox = styled.span`

  width: 24px;
  height: 20px;
  display: inline-block;
  position: relative;

`

const HamburgerInner = styled.span`
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({hamburger}) => hamburger ? 'transparent' : '#fff'};
    transition: background-color .2s linear;
    border-radius:25px;
    &::before{
      content: '';
      top: -8px;
      transition: background-color .2s linear, transform .2s;
      transform: ${({hamburger}) => hamburger ? 'translateY(8px) rotate(135deg)' : "translateY(0) rotate(0)"};
      right: 0;
      width: 50%;
      height: 3px;
      border-radius:25px;
      position: absolute;
      background-color: ${({hamburger}) => hamburger ? '#fff' : '#fff'};
    
    }
    &::after{
      content: '';
      top: 8px;
      border-radius:25px;
      right: 0;
      width: 70%;
      float: right;
      text-align: right;
      height: 3px;
      position: absolute;
      transition: background-color .2s linear, transform .2s linear;
      transform: ${({hamburger}) => hamburger ? 'translateY(-8px) rotate(-135deg)' : "translateY(0) rotate(0)"};
      background-color: ${({hamburger}) => hamburger ? '#fff' : '#fff'};

    }
`

const Navigation = () => {
    const [menu, showMenu] = useState(false)

    return (
        <>
            <GlobalStyle/>

            <NavigationHamburger hamburger={menu} onClick={() => showMenu(!menu)}>

                <NavigationHamburgerBox>

                    <HamburgerInner hamburger={menu}/>

                </NavigationHamburgerBox>

            </NavigationHamburger>

            <NavigationAside showNav={menu}>

                <NavigationWrapper>
                    <ul>
                        <li>Szukaj
                            <FaSearch/>
                        </li>
                        <li>Kontakt</li>
                        <li>O nas</li>
                        <li>Inne strony</li>
                        <li>Wesprzyj
                            <FaHeart/>
                        </li>
                        <li>Język: PL</li>
                    </ul>
                </NavigationWrapper>
            </NavigationAside>
        </>
    )
};

export default Navigation;