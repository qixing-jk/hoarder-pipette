import '~/styles/tailwind.css?inline_style'
import invariant from 'tiny-invariant'
import { createRoot } from 'react-dom/client'
import { Button } from '~/components/ui/button'

function $(selector: string, context: Element | Document = document) {
  return context.querySelector(selector)
}

if (document.readyState === 'complete') {
  initial()
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') initial()
  })
}

function initial() {
  const firstSearchResult = $('[data-test-id=mainline]')
  invariant(firstSearchResult, 'inject point not found')
  const rootDiv = document.createElement('div')
  rootDiv.id = 'extension-root'
  firstSearchResult.prepend(rootDiv)

  // Injecting content_scripts inside a shadow dom
  // prevents conflicts with the host page's styles.
  // This way, styles from the extension won't leak into the host page.
  const shadowRoot = rootDiv.attachShadow({ mode: 'open' })

  // Inform Extension.js that the shadow root is available.
  window.__EXTENSION_SHADOW_ROOT__ = shadowRoot

  const $container = document.createElement('div')
  $container.id = 'hoarder-inject'
  shadowRoot.append($container)

  const root = createRoot($container)
  root.render(<Button>Hello world</Button>)
}
