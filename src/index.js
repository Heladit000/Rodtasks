import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/index.scss';
import App from './App';
import { TaskProvider } from '@context/taskContext';
import { ModalProvider } from '@context/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ModalProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ModalProvider>
  </React.StrictMode>
);


