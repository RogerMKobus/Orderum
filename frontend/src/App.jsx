import React from 'react';
import Header from './components/Header'
import Board from './components/Board'
import GlobalStyle from './styles/global'

export default class App extends React.Component {
  render() {
    return (

      <div className="App">
        <GlobalStyle />
        <Header />
        <Board />
      </div>
    );
  }
}