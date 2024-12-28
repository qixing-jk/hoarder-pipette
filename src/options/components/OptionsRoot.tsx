import { createStore, Provider } from 'jotai'
import { Suspense, useState } from 'react'
import { OptionsUI } from './OptionsUI'

export function OptionsRoot() {
  const [store] = useState(createStore())
  return (
    <Provider store={store}>
      <Suspense>
        <OptionsUI />
      </Suspense>
    </Provider>
  )
}
