import React from 'react';
import Header from '../../components/Header/index'
import Board from '../../components/Board/index'
import GlobalStyle from '../../styles/global'

export default function Main(){
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Board />
      </div>
    );
}