export interface SearchEngine {
  url: string;
  getQuery: () => string | null;
  getRenderRoot: () => HTMLElement;
}
