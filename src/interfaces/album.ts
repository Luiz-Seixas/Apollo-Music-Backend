export interface AlbumResponse {
  created: string;
  count: number;
  offset: number;
  'release-groups': Album[];
}

export interface Album {
  id: string;
  score: number;
  title: string;
  'first-release-date': string;
  'primary-type': string;
  'artist-credit': ArtistCredit[];
}

export interface ArtistCredit {
  name: string;
  artist: Artist;
}

export interface Artist {
  id: string;
  name: string;
  disambiguation: string;
  aliases: Aliases[];
}

export interface Aliases {
  name: string;
  'sort-name': string;
  locale: any;
  'begin-date': any;
  'end-date': any;
}
