import { Director } from "./director";
import { Genre } from "./genre";

export interface Film {
    id: string;
    title: string;
    image: string;
    releaseYear: number;
    director: Director;
    genre: Genre;
  }