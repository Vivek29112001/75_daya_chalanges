import { StrictMode } from 'react'
import React from 'react'
import { Provider } from 'react-redux';
import Store from "./redux/Store.js" // default import
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
)
