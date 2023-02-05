import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './src/navigators/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
