// export interface WorkData {
//   created: Date;
//   count: number;
//   offset: number;
//   works: Work[];
// }

// export interface Work {
//   id: string;
//   score: string;
//   title: string;
//   relations: Relation[];
// }

// export interface Relation {
//   type: string;
//   direction: string;
//   artist?: Artist;
//   recording?: Recording;
// }

// export interface Artist {
//   id: string;
//   name: string;
//   'sort-name': string;
// }

// export interface Recording {
//   id: string;
//   title: string;
//   video: null;
// }

export interface WorkResponse {
  works: Work[];
  'work-offse': number;
  'work-count': number;
}

export interface Work {
  id: string;
  title: string;
  type: string;
  lenguage: string;
  attributes: [];
  iswcs: [];
  disambiguation: string;
  languages: [];
}
