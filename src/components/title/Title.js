import React from 'react'
import {Container, Logo} from "./styles";
import logo from 'assets/logo.png'
import {GITHUB} from "lib/constants";



export const Title = () => {
    return (
        <Container>
            <a href={GITHUB} target="_blank" rel="noreferrer">
                <Logo src={logo} alt=""/>
            </a>
        </Container>
    )
}