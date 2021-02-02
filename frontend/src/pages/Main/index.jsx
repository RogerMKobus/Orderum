import React from 'react';
import Header from '../../components/Header/index'
import Board from '../../components/Board/index'
import GlobalStyle from '../../styles/global'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

import { Container } from './styles'

export default function Main() {
    let history = useHistory();

    function handleRedirect() {
        history.push('/new-order')
    }

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Board />
            <Container>
                <Fab variant="extended" className="fab" color="primary" aria-label="add" onClick={handleRedirect}>
                    Novo Pedido
                    <AddIcon />
                </Fab>
            </Container>
        </div>
    );
}