import React from 'react';
import Header from '../../components/Header/index.jsx'

import { Container } from './styles';

function EditOrder() {
    return (
        <>
            <Header />
            <Container>
                <h1>
                    Editar Pedido
                </h1>
                <form autoComplete="off">
                    <input type='text'></input>
                </form>
            </Container>
        </>
    );
}

export default EditOrder;