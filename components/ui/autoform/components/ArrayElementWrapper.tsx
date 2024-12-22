import type React from 'react'
import { Button } from '~/components/ui/button'
import { TrashIcon } from 'lucide-react'
import type { ArrayElementWrapperProps } from '@autoform/react'

export const ArrayElementWrapper: React.FC<ArrayElementWrapperProps> = ({ children, onRemove }) => {
  return (
    <div className="relative p-4 mt-2 border rounded-md">
      <Button onClick={onRemove} variant="ghost" size="sm" className="absolute top-2 right-2" type="button">
        <TrashIcon className="w-4 h-4" />
      </Button>
      {children}
    </div>
  )
}
