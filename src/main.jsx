import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from './All.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div>
<All/>
</div>
  </React.StrictMode>,
)
