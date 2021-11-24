export interface ArtistSearch {
  created: Date;
  count: number;
  offset: number;
  artists: Artist[];
}

export interface Artist {
  id: string;
  type: Type;
  score: string;
  name: string;
  'sort-name': string;
  country: Country;
  area: Area;
  'begin-area'?: Area;
  disambiguation?: string;
  'life-span': LifeSpan;
  aliases?: Alias[];
  tags?: Tag[];
}

export interface Alias {
  'sort-name': string;
  name: string;
  locale: null;
  type: null;
  primary: null;
  'begin-date': null;
  'end-date': null;
}

export interface Area {
  id: string;
  name: Name;
  'sort-name': Name;
}

export enum Name {
  BatonRouge = 'Baton Rouge',
  UnitedStates = 'United States',
}

export enum Country {
  Us = 'US',
}

export interface LifeSpan {
  begin?: string;
  end?: string;
  ended: boolean | null;
}

export interface Tag {
  count: number;
  name: string;
}

export enum Type {
  Group = 'Group',
}

export interface ArtistBrowse {
  release_offset: number;
  release_count: number;
  releases: Releases[];
}

export interface Releases {
  id: string;
  title: string;
  date: string;
  country: string;
  status: string;
  quality: string;
  asin: string;
  barcode: null;
  packaging: string;
  disambiguation: string;
}
