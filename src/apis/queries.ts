import { IBeer } from "../interface";

export const fetchBeers = (page: number): Promise<IBeer[]> => {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then((res) => res.json());
};
