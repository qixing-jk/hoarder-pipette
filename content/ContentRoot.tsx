import { Suspense, useState } from 'react'
import { Loading } from './Loading'
import { Provider } from 'jotai'
import { store } from '~/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ContentUI } from './ContentUI'

export function ContentRoot() {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <ContentUI />
        </Suspense>
      </Provider>
    </QueryClientProvider>
  )
}
