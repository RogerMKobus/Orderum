import React from 'react';
import { Container } from './styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Card({ order }) {

    return (
        <Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <p>{order.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {order.description
                            ?
                            <>
                                <h4>
                                    Descrição:
                                </h4>
                                <p>
                                    {order.description}
                                </p>
                            </>
                            :
                            <>
                            </>
                        }
                        {order.contact
                            ?
                            <>
                                <h4>
                                    Contato:
                                </h4>
                                <p className='inline'>
                                    {order.contact}
                                </p>
                            </>
                            :
                            <>
                            </>
                        }
                        <br />
                        <h4>Data:</h4>
                        <p className='inline'>
                            {order.date}
                        </p>
                        <IconButton size='small' className='edit'>
                            <EditIcon />
                        </IconButton>
                        <IconButton size='small' className='right'>
                            <DeleteIcon />
                        </IconButton>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}