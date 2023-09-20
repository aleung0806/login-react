import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Providers from './Providers'
import TestInfo from './components/debug/TestInfo'
import NetworkInfo from './components/debug/NetworkInfo'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
   <Providers>
      <App />
      {/* <TestInfo/>
      <NetworkInfo/> */}
    </Providers>
  </Router>

)