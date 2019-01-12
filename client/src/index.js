import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import "./sass/main.scss";
import reducers from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: '/graphql'
});

const store = createStore(reducers);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
