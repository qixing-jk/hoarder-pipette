import { useQuery } from '@tanstack/react-query'
import { BookmarkPreview } from '~/components/BookmarkPreview'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { useClient } from '~/hooks/use-client'
import { pipe, Array } from 'effect'
import { useUserQuery } from '~/hooks/use-user-query'
import { ScrollBar, ScrollArea } from '~/components/ui/scroll-area'

export function HoarderCard() {
  const client = useClient()
  const userQuery = useUserQuery()
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

  if (!userQuery) {
    return null
  }
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Hoarder Bookmarks</h2>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          <div className="flex flex-col">
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
