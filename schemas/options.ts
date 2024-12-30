import { buildZodFieldConfig } from '@autoform/react'
import { z } from 'zod'
import type { FieldTypes } from '~/components/ui/autoform'

const fieldConfig = buildZodFieldConfig<FieldTypes>()

export const LooseOptionsSchema = z.object({
  url: z.string(),
  apiKey: z.string(),
})

export const AppOptionsSchema = z.object({
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
      inputProps: {
        type: 'password',
      },
    }),
  ),
})

export type AppOptions = z.infer<typeof AppOptionsSchema>
