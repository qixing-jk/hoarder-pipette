import { Suspense, useState } from 'react'
import { Loading } from './Loading'
import { Provider } from 'jotai'
import { store } from '~/store'
import { Toaster } from '~/components/ui/toaster'
import { HoarderCard } from './HoarderCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserQuery } from '~/hooks/use-user-query'

export function ContentRoot() {
  const [client] = useState(new QueryClient())
  const userQuery = useUserQuery()
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <HoarderCard key={userQuery} userQuery={userQuery} />
          <Toaster />
        </Suspense>
      </Provider>
    </QueryClientProvider>
  )
}
