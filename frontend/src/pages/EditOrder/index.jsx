import React from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import { Form } from '@unform/web'
import Input from '../../components/Form/Input'
import api from '../../services/api'
import { Container } from './styles';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';

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
                    <label>Título:</label>
                    <Input classname='input' name='title' />
                    <label>Descrição:</label>
                    <Input classname='input' name='description' />
                    <label>Contato:</label>
                    <Input classname='input' name='contact' />

                    <Button size='medium' variant="contained" color="primary" type='submit' startIcon={<CheckIcon />}>Salvar</Button>
                    <Button variant="contained" color="secondary" onClick={handleRedirect} startIcon={<ArrowBackIcon />}>Voltar</Button>
                </Form>
            </Container>
        </>
    );
}

export default EditOrder;