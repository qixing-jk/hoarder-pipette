import '~/styles/tailwind.css'
import { createRoot } from 'react-dom/client'
import invariant from 'tiny-invariant'
import { OptionsUI } from './components/OptionsUI'

const $container = document.querySelector('#root')
invariant($container, `Could not find the container with id "root"`)
const root = createRoot($container)
root.render(<OptionsUI />)
