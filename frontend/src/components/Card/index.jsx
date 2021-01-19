import React from 'react';

import { Container } from './styles';

export default function Card({ title }) {
        return (
                <Container>
                        <p>{title}</p>
                </Container>
        );
}