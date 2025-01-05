// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Hoarder' Pipette",
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/DanSnow/hoarder-pipette',
      },
      editLink: {
        baseUrl: 'https://github.com/DanSnow/hoarder-pipette/edit/main/docs/',
      },
      sidebar: [
        {
          label: 'Get Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Installation', slug: 'guides/installation' },
            { label: 'Configuration', slug: 'guides/configuration' },
          ],
        },
      ],
    }),
  ],
})
