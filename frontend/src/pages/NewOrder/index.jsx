import React from 'react';
import Header from '../../components/Header/index.jsx'
import { Form } from '@unform/web'
import Input from '../../components/Form/Input'
import api from '../../services/api'
import { Container } from './styles';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import DatePicker from "../../components/Form/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

function EditOrder() {
    let history = useHistory();

    async function handleSubmit(data) {
        try {
            data.date = data.date.toLocaleDateString();
            await api.post(`/order`, data);
            history.push('/');
        }
        catch (err) {
            alert('Erro ao cadastrar o pedido ' + err)
            console.log(err)
        }
    }

    function handleRedirect() {
        history.push('/')
    }

    return (
        <>
            <Header />
            <Container>
                <h1>
                    Novo Pedido
                </h1>
                <Form onSubmit={handleSubmit}>
                    <label>Título:</label>
                    <Input name='title' />
                    <label>Descrição:</label>
                    <Input name='description' />
                    <label>Contato:</label>
                    <Input name='contact' />
                    <label>Data:</label>
                    <br />
                    <DatePicker className='date' name='date'/>
                    <br />
                    <Button size='medium' variant="contained" color="primary" type='submit' startIcon={<CheckIcon />}>Salvar</Button>
                    <Button variant="contained" color="secondary" onClick={handleRedirect} startIcon={<ArrowBackIcon />}>Voltar</Button>
                </Form>
            </Container>
        </>
    );
}

export default EditOrder;