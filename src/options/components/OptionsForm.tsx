import { AutoForm } from '~/components/ui/autoform'
import { ZodProvider } from '@autoform/zod'
import { useAtomValue } from 'jotai'
import { useCallback } from 'react'
import type { z } from 'zod'
import { optionsAtom } from '~/atoms/storage'
import { createClient } from '~/client'
import { Button } from '~/components/ui/button'
import { useToast } from '~/hooks/use-toast'
import { AppOptionsSchema } from '~/schemas/options'

const schemaProvider = new ZodProvider(AppOptionsSchema)

export function OptionsForm() {
  const initialValues = useAtomValue(optionsAtom)
  const { toast } = useToast()
  console.log(initialValues)
  const handleSubmit = useCallback(
    async (data: z.infer<typeof AppOptionsSchema>) => {
      const client = createClient(data.url, data.apiKey)

      try {
        const res = await client.getLists()
        if (res.status !== 200) {
          toast({
            title: 'Invalid config, please check your config and try again.',
            description: `Expected status 200, but got ${res.status}`,
          })
          return
        }
        console.log(res)
      } catch (error) {
        toast({
          title: 'Invalid config, please check your config and try again.',
          description: (error as Error).message,
        })
        return
      }
      await chrome.storage.sync.set(data)
      toast({
        title: 'Config Saved',
      })
    },
    [toast],
  )

  return (
    <AutoForm schema={schemaProvider} defaultValues={initialValues} onSubmit={handleSubmit}>
      <Button type="submit">Save</Button>
    </AutoForm>
  )
}
