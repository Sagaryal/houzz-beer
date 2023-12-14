import { TBeer } from "../types";

export const fetchBeers = (page: number, per_page = 10): Promise<TBeer[]> => {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`).then((res) => res.json());
};
