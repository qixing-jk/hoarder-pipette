import { Toaster } from '~/components/ui/toaster'
import { useMedia } from 'react-use'
import { cn } from '~/lib/utils'
import { OptionsForm } from './OptionsForm'
import { Suspense } from 'react'

export function OptionsUI() {
  const isDark = useMedia('(prefers-color-scheme: dark)')
  return (
    <div className={cn({ dark: isDark })}>
      <div className="container mx-auto min-w-64 p-2 lg:py-8 dark:bg-black dark:text-white">
        <h1 className="mb-4 font-bold text-2xl">Options</h1>
        <Suspense>
          <OptionsForm />
        </Suspense>
        <Toaster />
      </div>
    </div>
  )
}
