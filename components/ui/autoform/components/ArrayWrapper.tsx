import type React from 'react'
import { Button } from '~/components/ui/button'
import { PlusIcon } from 'lucide-react'
import type { ArrayWrapperProps } from '@autoform/react'

export const ArrayWrapper: React.FC<ArrayWrapperProps> = ({ label, children, onAddItem }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{label}</h3>
      {children}
      <Button onClick={onAddItem} variant="outline" size="sm" type="button">
        <PlusIcon className="w-4 h-4" />
      </Button>
    </div>
  )
}
