import { Suspense, useState } from 'react'
import { Loading } from './Loading'
import { Provider } from 'jotai'
import { store } from '~/store'
import { Toaster } from '~/components/ui/toaster'
import { HoarderCard } from './HoarderCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function ContentRoot() {
  const [client] = useState(new QueryClient())
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <HoarderCard />
          <Toaster />
        </Suspense>
      </Provider>
    </QueryClientProvider>
  )
}
