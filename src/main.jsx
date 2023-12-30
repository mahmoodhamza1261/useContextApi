import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateContext from './components/CreateContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<CreateContext>
    <App />
</CreateContext>
    
  </React.StrictMode>,
)
