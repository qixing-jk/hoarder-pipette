import invariant from 'tiny-invariant'
import type { z } from 'zod'
import type { BookmarkSchema } from '~/client'

export function BookmarkPreview({ bookmark }: { bookmark: z.infer<typeof BookmarkSchema> }) {
  invariant(bookmark.content.type === 'link', 'bookmark is not link')

  return (
    <a href={bookmark.content.url} target="_blank" rel="noreferrer noopener">
      <div className="flex items-center gap-2 p-2">
        {bookmark.content.imageUrl && (
          <div className="relative size-32 aspect-square overflow-clip">
            <img
              className="absolute inset-0 object-contain m-auto"
              src={bookmark.content.imageUrl}
              alt={bookmark.content.title || 'image'}
            />
          </div>
        )}
        <div>
          <h3 className="text-bold">{bookmark.title}</h3>
          <p className="text-gray-500 dark:text-gray-300 line-clamp-2">{bookmark.content.description}</p>
        </div>
      </div>
    </a>
  )
}
