import { ecosia } from './ecosia';
import { google } from './google';

export const supportedEngines = [ecosia, google];

export function getUserQuery() {
  for (const engine of supportedEngines) {
    if (window.location.href.startsWith(engine.url)) {
      return engine.getQuery();
    }
  }
  throw new Error('Unsupported engine');
}

export function getRenderRoot(): HTMLElement {
  for (const engine of supportedEngines) {
    if (window.location.href.startsWith(engine.url)) {
      return engine.getRenderRoot();
    }
  }
  throw new Error('Unsupported engine');
}
