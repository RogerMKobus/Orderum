import React from 'react';

import { Container, Content } from './styles';

export default class Header extends React.Component{

    render(){
        return (
            <Container>
                <Content>
                    <h1>Content</h1>
                </Content>
            </Container>
        );
        
    }
}