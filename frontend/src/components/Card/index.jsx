import React from 'react';
import { useHistory } from "react-router-dom";
import api from '../../services/api'
import { Container } from './styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Card({ order, lanes }) {

    let history = useHistory();

    function handleRedirect() {
        history.push({
            pathname: '/edit',
            state: { 
                order,
                lanes
             },
        })
    }

    async function handleDelete() {
        const confirm = window.confirm('Tem certeza que deseja remover o pedido?')
        if (confirm === true) {
            try {
                await api.delete(`/${order._id}/order`)
                window.location.reload();
            }
            catch (err) {
                alert('Erro ao deletar o pedido ' + err)
                console.log(err)
            }
        }
    }

    return (
        <Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <p>{order.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        {order.description
                            ?
                            <>
                                <h4>Descrição:</h4>
                                <p>{order.description}</p>
                            </>
                            :
                            <></>
                        }
                        {order.contact
                            ?
                            <>
                                <h4>Contato:</h4>
                                <p className='inline'>
                                    {order.contact}
                                </p>
                            </>
                            :
                            <></>
                        }
                        <br />
                        <h4>Data:</h4>
                        <p className='inline'>
                            {order.date}
                        </p>
                        <IconButton size='small' className='edit' onClick={handleRedirect}>
                            <EditIcon />
                        </IconButton>
                        <IconButton size='small' className='right' onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}