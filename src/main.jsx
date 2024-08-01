import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import ThemeProvider from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>  
)
