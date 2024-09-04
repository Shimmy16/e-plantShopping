import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Stellen Sie sicher, dass der Pfad zur store.js korrekt ist

// Erstellen Sie den Root-Element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendern Sie die App-Komponente, um die Anwendung anzuzeigen
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrappen Sie die App-Komponente mit dem Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
