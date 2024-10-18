// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Adjust the path based on your file structure
import { makeServer } from './mirage'; // Import from Mirage

// Start the Mirage server
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
