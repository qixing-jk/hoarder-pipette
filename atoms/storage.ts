import { atom } from 'jotai'
import { createClient } from '~/client'
import { LooseOptionsSchema, type AppOptions } from '~/schemas/options'

export const optionsAtom = atom(async () => {
  const res = await chrome.storage.sync.get({
    apiKey: '',
    url: '',
  } satisfies AppOptions)
  return LooseOptionsSchema.parse(res)
})

export const clientAtom = atom(async (get) => {
  const { apiKey, url } = await get(optionsAtom)
  return createClient(url, apiKey)
})
