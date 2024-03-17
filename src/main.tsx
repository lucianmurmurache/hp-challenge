import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
