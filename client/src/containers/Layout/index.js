import React from "react"
import { Container } from "./styles";

export const Layout = ({ children, ...props }) => {
    return (
        <Container { ...props }>
            { children }
        </Container>
    )
}