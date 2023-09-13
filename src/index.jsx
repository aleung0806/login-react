import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider} from 'react-query'

import './services/interceptors'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
    </CookiesProvider>
    </QueryClientProvider>
  </Router>

)
