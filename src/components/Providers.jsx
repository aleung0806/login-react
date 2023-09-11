import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
import { CookiesProvider } from 'react-cookie';

const Providers = ({children}) => {
  return (
    <CookiesProvider defaultSetOptions >
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    </CookiesProvider>

  )
}

export default Providers