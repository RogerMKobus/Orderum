import React, { Component } from 'react';

import Lane from '../Lane/index.jsx'
import { Container } from './styles';
import api from '../../services/api'

export default class Board extends Component {
    state = {
        lanes: [],
        orders: []
    }

    async componentDidMount() {
        const { data: lanes } = await api.get('/lane')
        const { data: orders } = await api.get('/')
        this.setState({ lanes, orders })
    }

    render() {
        return (
           
                <Container>
                    <Lane lanes={this.state.lanes} orders={this.state.orders} />
                </Container>
        );
    }
}
