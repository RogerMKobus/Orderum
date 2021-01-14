import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import GlobalStyle from './styles/global'

export default class App extends React.Component {
  render(){
    return (
      
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    );
  }
}