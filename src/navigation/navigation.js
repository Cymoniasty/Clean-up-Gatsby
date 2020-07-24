import React from "react";
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';

const NavigationAside = styled.aside`
    position: fixed;
    top: 50px;
    bottom: 0;
    right: 0;
    background-color: #0E0E0E;
    width: 10%;

`

const NavigationWrapper = styled.nav`

ul{
    text-align: right;
    margin-top: 30px;
    margin-right: 30px;
    list-style: none;
    color: white;
    font-family: "Muli" ,sans-serif; 
    font-size: 18px;
    line-height: 50px;

}

li{}

`

const Navigation = () => (
    <NavigationAside>
        <NavigationWrapper>
            <ul>
                <li>Szukaj
                    <FaSearch/>
                </li>
                <li>Kontakt</li>
                <li>O nas</li>
                <li>Inne strony</li>
                <li>Język: PL</li>
            </ul>
        </NavigationWrapper>
    </NavigationAside>
);

export default Navigation;