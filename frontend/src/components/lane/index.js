import React, { Component } from 'react';
import api from '../../services/api'
import { Container } from './styles';

export default class Lane extends Component {
    state = {
        lanes: [],
    }

    async componentDidMount() {
        const { data: lanes } = await api.get('/lane')
        this.setState({ lanes })
    }

    render(){
        return(
            <Container>
                { this.state.lanes.map(lane => 
                    <h1 key={lane.id}>
                        {lane.title}
                        <p>
                        </p>
                    </h1>
                    ) }
            </Container>
          )
    }
}