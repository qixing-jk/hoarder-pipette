import { AutoForm, type FieldTypes } from '~/components/ui/autoform'
import { ZodProvider } from '@autoform/zod'
import { z } from 'zod'
import { buildZodFieldConfig } from '@autoform/react'
import { Button } from '~/components/ui/button'
import { Toaster } from '~/components/ui/toaster'
import { useCallback } from 'react'
import { useToast } from '~/hooks/use-toast'
import { createClient } from '~/client'

const fieldConfig = buildZodFieldConfig<FieldTypes>()

const optionSchema = z.object({
  url: z
    .string()
    .url()
    .superRefine(
      fieldConfig({
        label: 'URL',
        description: 'Your Hoarder instance URL',
      }),
    ),
  apiKey: z.string().superRefine(
    fieldConfig({
      label: 'API Key',
      description: 'Your API key',
    }),
  ),
})

const schemaProvider = new ZodProvider(optionSchema)

export function OptionsUI() {
  const { toast } = useToast()
  const handleSubmit = useCallback(
    async (data: z.infer<typeof optionSchema>) => {
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
    <div className="container p-2 mx-auto lg:py-8">
      <h1 className="mb-4 text-2xl font-bold">Options</h1>
      <AutoForm schema={schemaProvider} onSubmit={handleSubmit}>
        <Button type="submit">Save</Button>
      </AutoForm>
      <Toaster />
    </div>
  )
}
