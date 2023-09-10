import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Verify from './Verify'
const queryClient = new QueryClient()

const Providers = ({children}) => {
  return (
    //<Verify>
      <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
    //</Verify>
  )
}

export default Providers