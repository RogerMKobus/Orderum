import React, { Component } from 'react';
import api from '../../services/api'
import { Container, Content } from './styles';

export default class Header extends Component{

    state = {
        orders: []
    }

    async componentDidMount() {
        const { data: orders } = await api.get('/')

        this.setState({ orders })
    }

    render(){
        return (
            <Container>
                <Content>
                    { this.state.orders.map(order => 
                    <h1 key={order.id}>
                        {order.title}
                        <p>
                            {order.description}
                        </p>
                    </h1>
                    ) }
                </Content>
            </Container>
        );
        
    }
}
