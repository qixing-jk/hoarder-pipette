import invariant from 'tiny-invariant'
import type { z } from 'zod'
import type { BookmarkSchema } from '~/client'

export function BookmarkPreview({ bookmark }: { bookmark: z.infer<typeof BookmarkSchema> }) {
  invariant(bookmark.content.type === 'link', 'bookmark is not link')

  return (
    <a href={bookmark.content.url} target="_blank" rel="noreferrer noopener">
      <div>
        <h3 className="text-bold">{bookmark.title}</h3>
      </div>
    </a>
  )
}
