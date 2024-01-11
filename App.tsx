import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MyStore from './redux/MyStore';
import Products from './Products';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <Provider store={MyStore}>
     <AppNavigator/>
    </Provider>
  );
};

export default App;
