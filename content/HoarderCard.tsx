import { useQuery } from '@tanstack/react-query'
import { BookmarkPreview } from '~/components/BookmarkPreview'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { useClient } from '~/hooks/use-client'
import { pipe, Array } from 'effect'
import { ScrollBar, ScrollArea } from '~/components/ui/scroll-area'
import { useAtomValue } from 'jotai'
import { optionsAtom } from '~/atoms/storage'

export function HoarderCard({ className, userQuery }: { className?: string; userQuery: string }) {
  const options = useAtomValue(optionsAtom)
  const client = useClient()
  const { data } = useQuery({
    placeholderData: [],
    enabled: Boolean(userQuery),
    queryKey: ['bookmarksSearch', userQuery],
    gcTime: 600_000, // 10 minutes,
    staleTime: 300_000, // 5 minutes,
    queryFn: async () => {
      const response = await client.searchBookmark({
        query: {
          input: {
            json: {
              text: userQuery,
            },
          },
        },
      })
      if (response.status !== 200) {
        throw new Error('Failed to fetch bookmarks')
      }
      return response.body.result.data.json.bookmarks
    },
  })

  if (!options.apiKey || !options.url) {
    return (
      <h2 className="text-lg font-bold text-center">
        Hoarder Injector: Please open options page to configure your API key and URL
      </h2>
    )
  }

  if (!userQuery) {
    return null
  }

  return (
    <Card className={className}>
      <CardHeader>
        <h2 className="text-xl font-bold">Hoarder Bookmarks</h2>
      </CardHeader>
      <CardContent>
        <ScrollArea className="pr-8 h-72">
          <div className="flex flex-col gap-2">
            {pipe(
              data ?? [],
              Array.filter((bookmark) => bookmark.content.type === 'link'),
              Array.map((bookmark) => <BookmarkPreview key={bookmark.id} bookmark={bookmark} />),
            )}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
