import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './components/App';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
)
