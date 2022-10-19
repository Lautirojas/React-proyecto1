import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { CarritoProvider } from './components/context/CarritoContext';
import App from './components/App';
// import "./utils/Fprod"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <CarritoProvider>
            <App />
        </CarritoProvider>
);
