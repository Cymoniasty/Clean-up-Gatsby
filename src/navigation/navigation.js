import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {FaSearch} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;

const NavigationAside = styled.aside`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #0E0E0E;
    width: 260px;

`

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

const Navigation = () => (
    <>
        <GlobalStyle/>
        <NavigationAside>
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
);

export default Navigation;