import React from 'react';
import ReactDOM from 'react-dom/client';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp } from '@ionic/react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IonApp>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </IonApp>
);
