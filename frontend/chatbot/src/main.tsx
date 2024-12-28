import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";


const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement); 
root.render(
  <div className="container-fluid w-100 h-100  ">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>

  );