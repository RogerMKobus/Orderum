import 'react-native-gesture-handler'
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './src/pages/HomePage'
import EditOrder from './src/pages/EditOrder'
import NewOrder from './src/pages/NewOrder'

const Stack = createStackNavigator()

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage}  options={{ headerShown: false }} />
          <Stack.Screen name="Edit" component={EditOrder}  options={{ headerShown: false }} />
          <Stack.Screen name="New" component={NewOrder}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
