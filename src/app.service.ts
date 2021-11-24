import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { api } from './client/api';

import { WorkResponse, Work } from './interfaces/workResponse';
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
        return { name: artist.name, id: artist.id };
      });

      return console.log(names);
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

  async getWork(work: string) {
    const res = await api.get(`/work/?query=work:${work}&fmt=json`);
  }
}
