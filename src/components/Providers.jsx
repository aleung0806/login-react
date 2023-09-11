import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

const Providers = ({children}) => {
  return (
    //<Auth>
      <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
    //</Auth>
  )
}

export default Providers