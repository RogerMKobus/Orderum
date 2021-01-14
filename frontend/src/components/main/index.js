import React, { Component } from 'react';
import Lane from '../Lane/index'
import { Container } from './styles';

export default class Header extends Component{

    render(){
        return (
            <Container>
                    <Lane />
            </Container>
        );
        
    }
}
