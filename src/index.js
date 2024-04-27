import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);