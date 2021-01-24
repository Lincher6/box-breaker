import React from "react";
import { Container, Content, Img, H1, H2 } from "./styles";
import image404 from 'assets/404.png'
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const Component404 = () => {
    return (
        <Container>
            <Content>
                <Img src={ image404 } alt="404"/>
                <H1>
                    404
                </H1>
            </Content>
            <H2>
                Oooops, no page found!
            </H2>

            <NavLink to='/'>
                <Button variant='contained' color='primary'>
                    Game
                </Button>
            </NavLink>
        </Container>
    )
}