import React from 'react';

import { Container } from './styles';

export default function Card({ orders, lane }) {
        console.log(orders, lane)
        return (
                <Container>
                        {orders.map(order => {
                                if(order.lane === lane){
                                        return <h1 key={order._id}>{order.title}</h1>
                                }
                                return
                        })}
                </Container>
        );
}
