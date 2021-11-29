import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { api } from './client/api';

import {
  WorkResponse,
  Work,
  Relation,
  IArtist,
} from './interfaces/workResponse';
import { ArtistSearch, Artist } from './interfaces/artistsResponse';

@Injectable()
export class AppService {
  async searchArtist(artistName: string) {
    try {
      const res: AxiosResponse<ArtistSearch> = await api.get(
        `/artist?query=${artistName}&fmt=json`,
      );
      // `/artist?query=${name}&limit=1&fmt=json`

      const data = res.data;
      const names = data.artists.map((artist: Artist) => {
        return { name: artist.name, type: artist.type, id: artist.id };
      });
      console.log(data);
      return names;
    } catch (err) {
      console.log(err);
    }
  }

  async searchWork(workName: string) {
    const formattedString = workName.replace(/\s/g, '+');

    try {
      const res: AxiosResponse<WorkResponse> = await api.get(
        `/work?query=${formattedString}&method=indexed&fmt=json`,
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

  async browserWorks(id: string) {
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
      const res = await api.get(`/artist?work=${id}&fmt=json`);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}
