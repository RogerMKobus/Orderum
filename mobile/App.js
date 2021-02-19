import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Header from './src/components/Header'
import Board from './src/components/Board'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#073596',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Header />
      <Board />
    </PaperProvider>
  );
};

export default App;
