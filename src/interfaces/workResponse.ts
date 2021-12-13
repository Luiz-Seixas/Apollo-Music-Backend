export interface WorkResponse {
  created: string;
  'work-offse': number;
  'work-count': number;
  works: Work[];
}

export interface Work {
  id: string;
  title: string;
  type: string;
  score: number;
  lenguage: string;
  attributes: [];
  iswcs: [];
  disambiguation: string;
  languages: [];
  relations: Relation[];
}

export interface Relation {
  type: string;
  direction: string;
  artist: IArtist;
}

export interface IArtist {
  id: string;
  name: string;
  'sort-name': string;
}
