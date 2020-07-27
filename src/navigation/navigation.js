import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {FaChevronDown, FaSearch, FaHeart} from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      background-color: #333;
    }
    
    svg{
        transform: translateY(20%);
        margin-left: 10px;
    }
`;

const NavigationAside = styled.aside`
    width: 260px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #0E0E0E;
    transform: ${({showNav}) => showNav ? "translateX(0)" : "translateX(260px)"};
    transition: transform .2s linear;
`;

const NavigationWrapper = styled.nav`
    ul{
        text-align: right;
        font-size: 18px;
        margin-top: 80px;
        margin-right: 40px;
        line-height: 50px;
        list-style: none;
        color: white;
        font-family: "Muli" ,sans-serif; 
    }`

const NavigationHamburger = styled.button`
    position: fixed;
    top: 25px;
    right: 25px;
    display: inline-block;
    z-index: 1;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: .2s linear;
`

const NavigationHamburgerBox = styled.span`
    position: relative;
    display: inline-block;
    width: 24px;
    height: 20px;
`

const HamburgerInner = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 100%;
    height: 3px;
    border-radius:25px;
    background-color: ${({hamburger}) => hamburger ? 'transparent' : '#fff'};
    transform: translateY(-50%);
    transition: background-color .2s linear;
    &::before{
      content: '';
      position: absolute;
      top: -8px;
      right: 0;
      width: ${({hamburger}) => hamburger ? '70%' : "50%"};
      height: 3px;
      border-radius:25px;
      background-color: ${({hamburger}) => hamburger ? '#fff' : '#fff'};
      transform: ${({hamburger}) => hamburger ? 'translateY(8px) rotate(135deg)' : "translateY(0) rotate(0)"};
      transition: background-color .2s linear, transform .2s;
    }
    &::after{
      content: '';
      position: absolute;
      top: 8px;
      right: 0;
      width: 70%;
      height: 3px;
      border-radius:25px;
      background-color: ${({hamburger}) => hamburger ? '#fff' : '#fff'};
      transform: ${({hamburger}) => hamburger ? 'translateY(-8px) rotate(-135deg)' : "translateY(0) rotate(0)"};
      transition: background-color .2s linear, transform .2s linear;
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
                        <li>Szukaj<FaSearch/></li>
                        <li>Kontakt</li>
                        <li>O nas</li>
                        <li>Inne strony<FaChevronDown/></li>
                        <li>Wesprzyj<FaHeart/></li>
                        <li>Język: PL<FaChevronDown/></li>
                    </ul>
                </NavigationWrapper>
            </NavigationAside>
        </>
    )
};

export default Navigation;