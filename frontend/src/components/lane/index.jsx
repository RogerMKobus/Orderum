import React from 'react';
import { Container } from './styles';
import Card from '../Card/index.jsx'

export default function Lane ({ lanes, orders }) {
    
        return(
            <Container>
                { lanes.map(lane => 
                    <div key={lane._id}>
                        <h2>{lane.title}</h2>
                        <Card key={ orders.id } orders={ orders } lane={ lane._id }/>
                    </div>
                    ) }
            </Container>
          )
    
}