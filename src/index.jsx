import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Providers from './Providers'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
   <Providers>
      <App />
    </Providers>
  </Router>

)