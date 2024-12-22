import { fromUrlQuery } from './utils/get-query';
import type { SearchEngine } from './utils/types';

export const ECOSIA_URL = 'https://www.ecosia.org/search';

export const ecosia: SearchEngine = {
  url: ECOSIA_URL,
  getQuery: fromUrlQuery('q'),
};
