import invariant from 'tiny-invariant'
import { createRoot } from 'react-dom/client'
import { Button } from '~/components/ui/button'

function $(selector: string, context: Element | Document = document) {
  return context.querySelector(selector)
}

window.addEventListener(
  'load',
  () => {
    const $container = document.createElement('div')
    $container.id = 'hoarder-inject'
    const firstSearchResult = $('[data-test-id=mainline-result-web]')
    invariant(firstSearchResult, 'inject point not found')
    firstSearchResult.prepend($container)

    const root = createRoot($container)
    root.render(<Button>Hello world</Button>)
  },
  { once: true },
)
