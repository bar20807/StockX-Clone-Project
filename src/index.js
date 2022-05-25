import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import App from './App';
import { hydrateRoot } from 'react-dom/client'

const container = document.getElementById('root')
hydrateRoot(container, <App />)

