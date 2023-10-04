import React from 'react';
import Router from 'router/router';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/lib/integration/react';
// import {store} from './src/redux/configureStore';
// import {persistStore} from 'redux-persist';
import 'react-native-gesture-handler';

// let persistor = persistStore(store);

const Index = () => {
  return (
    <>
      {/* <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}> */}
      <Router />
      {/* </PersistGate>
      </Provider> */}
    </>
  );
};

export default Index;
