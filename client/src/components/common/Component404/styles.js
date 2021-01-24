import styled from "styled-components/macro";
import {PRIMARY, SECONDARY} from "lib/constants";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
`;

export const H1 = styled.h1`
    font-size: 5rem;
    font-family: 'Kelly Slab', sans-serif;
    color: ${SECONDARY};
    text-shadow: -4px 4px 2px #000000aa;
`;

export const H2 = styled.h2`
    color: ${PRIMARY};
    padding: 5px;
`;