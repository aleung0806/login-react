import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider} from 'react-query'

import './services/interceptors'

const queryClient = new QueryClient()

const Providers = ({children}) => {
  console.log('loading providers')
  return (
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
    </CookiesProvider>
    </QueryClientProvider>
  )
}

export default Providers
