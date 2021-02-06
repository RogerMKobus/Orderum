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
import DatePicker from "../../components/Form/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../../components/Form/Select";

function EditOrder() {

    let history = useHistory();

    const location = useLocation();

    const order = location.state.order

    const lanes = location.state.lanes

    async function handleSubmit(data) {
        try {
            data.date = data.date.toLocaleDateString();
            await api.put(`/${order._id}/order`, data);
            history.push('/')
        }
        catch (err) {
            alert('Erro ao atualizar o pedido ' + err)
            console.log(err)
        }
    }

    function handleRedirect() {
        history.push('/')
    }

    const options = lanes.map((lane) => {
        return { value: lane._id, label: lane.title }
    });

    const getLane = lanes.find((lane) => lane._id === order.lane)

    return (
        <>
            <Header />
            <Container>
                <h1>
                    Editar Pedido
                </h1>
                <Form initialData={order} onSubmit={handleSubmit}>
                    <label>Título:</label>
                    <Input name='title' />
                    <label>Descrição:</label>
                    <Input name='description' />
                    <label>Contato:</label>
                    <Input name='contact' />
                    <label>Data:</label>
                    <br />
                    <DatePicker className='date' name='date' />
                    <br />
                    <label>Linha:</label>
                    <Select classNamePrefix="Select" className='select' name='lane' options={options} laneTitle={getLane.title} minMenuHeight='35' />
                    <Button className='buttonClass' size='medium' variant="contained" color="primary" type='submit' startIcon={<CheckIcon />}>Salvar</Button>
                    <Button className='buttonClass' variant="contained" color="secondary" onClick={handleRedirect} startIcon={<ArrowBackIcon />}>Voltar</Button>
                </Form>
            </Container>
        </>
    );
}

export default EditOrder;