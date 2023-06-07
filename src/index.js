import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the App component inside the root element
ReactDOM.render(
  // Wrap the App component with React.StrictMode to enable additional React checks
  // This helps identify potential issues in the application during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the component inside the element with the id 'root'
);
