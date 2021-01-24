import React from 'react';
import { Container } from './styles';

export const Box = React.memo(({ id, ...props }) => {
    return (
        <Container
            { ...props }
            data-type='boxes'
            data-id={id}
        />
    );
});