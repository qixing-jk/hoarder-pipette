import { Suspense, useEffect, useState } from 'react'
import { Loading } from './Loading'
import { Provider } from 'jotai'
import { store } from '~/store'
import { Toaster } from '~/components/ui/toaster'
import { HoarderCard } from './HoarderCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserQuery } from '~/hooks/use-user-query'
import { useMedia } from 'react-use'
import { cn } from '~/lib/utils'
import { containerAtom } from '~/atoms/container'

function setContainer(el: HTMLElement | null) {
  if (el) {
    store.set(containerAtom, el)
  } else {
    store.set(containerAtom, undefined)
  }
}

export function ContentRoot({ root }: { root: HTMLElement }) {
  const [client] = useState(new QueryClient())
  const userQuery = useUserQuery()
  const isDark = useMedia('(prefers-color-scheme: dark)')

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <div className={cn({ dark: isDark })}>
            <HoarderCard key={userQuery} userQuery={userQuery} />
            <Toaster />
            <div ref={setContainer} />
          </div>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  )
}
