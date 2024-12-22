import { ecosia } from './ecosia';

export const supportedEngines = [ecosia];

export function getUserQuery() {
  for (const engine of supportedEngines) {
    if (window.location.href.startsWith(engine.url)) {
      return engine.getQuery();
    }
  }
  throw new Error('Unsupported engine');
}
