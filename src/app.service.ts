import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { api } from './client/api';

import { WorkResponse, Work, Relation } from './interfaces/workResponse';
import { ArtistSearch, Artist } from './interfaces/artistsResponse';
import { AlbumResponse, Album, ArtistCredit } from './interfaces/album';

@Injectable()
export class AppService {
  async searchArtistsByName(artistName: string) {
    //recebe uma string com nome de um artista e retorna todos os artistas relacionados a esse nome
    try {
      const res: AxiosResponse<ArtistSearch> = await api.get(
        `/artist?query=${artistName}&fmt=json`,
      );
      // `/artist?query=${name}&limit=1&fmt=json`

      const data = res.data;
      const names = data.artists.map((artist: Artist) => {
        return { name: artist.name, type: artist.type, id: artist.id };
      });
      console.log(names);
      return names;
    } catch (err) {
      console.log(err);
    }
  }

  async searchWorksByName(workName: string) {
    // recebe uma string com nome de uma obra e retorna todas as obras relacionadas com o nome
    try {
      const res: AxiosResponse<WorkResponse> = await api.get(
        `/work?query=${workName}&method=indexed&fmt=json`,
      );
      const data = res.data;

      const works = data.works.map((work: Work) => {
        const artists = work.relations.map((relation: Relation) => {
          if (relation.artist) {
            return { type: relation.type, artists: relation.artist };
          }
        });

        const ArtistsFiltered = artists.filter((element) =>
          element == null ? false : true,
        );

        console.log({
          title: work.title,
          artists: ArtistsFiltered,
        });
        return {
          title: work.title,
          type: work.type,
          id: work.id,
          relations: ArtistsFiltered,
        };
      });

      return works;
    } catch (err) {
      console.log(err);
    }
  }

  async searchAlbumByName(albumName: string) {
    // Busca um Álbum pelo nome
    try {
      const res = await api.get(
        `/release-group/?query=release:${albumName}&fmt=json`,
      );
      const data: AlbumResponse = res.data;
      const albums = data['release-groups'].map((album: Album) => {
        const artist = album['artist-credit'].map((artist: ArtistCredit) => {
          return artist.name;
        });

        return {
          title: album.title,
          id: album.id,
          artist: artist,
          date: album['first-release-date'],
        };
      });

      console.log(albums);
      return albums;
    } catch (error) {
      console.log(error);
    }
  }

  async searchWorksByArtist(id: string) {
    // recebe um id de um artista e retorna as obras dele
    try {
      const res = await api.get(`/work?artist=${id}&limit=300&fmt=json`);
      const data: WorkResponse = res.data;

      console.log(data['work-count']);
      const Songs = data.works.map((work: Work) => {
        console.log(work.title);
        return work.title;
      });
      return Songs;
    } catch (err) {
      console.log('Erro', err);
    }
  }

  async findWork(id: string) {
    try {
      const res = await api.get(`/work/${id}?inc=artist-rels&fmt=json`);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}
