import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MyStore, {persistedStore} from './redux/MyStore';
import Products from './Products';
import AppNavigator from './src/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={MyStore}>
      <PersistGate persistor={persistedStore}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
