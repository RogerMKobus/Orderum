import React from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import { Form } from '@unform/web'
import Input from '../../components/Form/Input'
import api from '../../services/api'
import { Container } from './styles';
import { useHistory } from "react-router-dom";

function EditOrder() {
    let history = useHistory();
    const location = useLocation();

    const order = location.state.order

    async function handleSubmit(data) {
        await api.put(`/${order._id}/order`, data);
        history.push('/')
    }

    function handleRedirect(){
        history.push('/')
    }

    return (
        <>
            <Header />
            <Container>
                <h1>
                    Editar Pedido
                </h1>
                <Form initialData={order} onSubmit={handleSubmit}>
                    <Input name='title' />
                    <Input name='description' />
                    <Input name='contact' />

                    <button type='submit'>Salvar</button>
                    <button onClick={handleRedirect}>Voltar</button>
                </Form>
            </Container>
        </>
    );
}

export default EditOrder;