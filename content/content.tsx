import '~/styles/tailwind.css?inline_style'
import { createRoot } from 'react-dom/client'
import { ContentRoot } from './ContentRoot'
import { getRenderRoot } from '~/lib/search-engines'

if (document.readyState === 'complete') {
  initial()
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') initial()
  })
}

function initial() {
  const renderRoot = getRenderRoot()
  const root = createRoot(renderRoot)
  root.render(<ContentRoot />)
}
