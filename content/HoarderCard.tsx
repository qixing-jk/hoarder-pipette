import { useQuery } from '@tanstack/react-query'
import { BookmarkPreview } from '~/components/BookmarkPreview'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { useClient } from '~/hooks/use-client'
import { pipe, Array } from 'effect'

export function HoarderCard() {
  const client = useClient()
  const userQuery = 'hoarder'
  const { data } = useQuery({
    placeholderData: [],
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
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Hoarder Bookmarks</h2>
      </CardHeader>
      <CardContent>
        {pipe(
          data ?? [],
          Array.filter((bookmark) => bookmark.content.type === 'link'),
          Array.map((bookmark) => <BookmarkPreview key={bookmark.id} bookmark={bookmark} />),
        )}
      </CardContent>
    </Card>
  )
}
