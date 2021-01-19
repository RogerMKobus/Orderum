import React from 'react';
import { Container } from './styles';
import Card from '../Card/index.jsx'

export default function Lane({ lanes, orders }) {
    return (
        <>
            <Container>
                {lanes.map(lane =>
                    <div key={lane._id} className='space'>
                        <h2>{lane.title}</h2>
                        {orders.map(order => {
                            if (order.lane === lane._id) {
                                return <Card key={order._id} title={order.title} lane={lane._id} />
                            }
                            return
                        })}
                    </div>
                )}
            </Container>
        </>
    )

}