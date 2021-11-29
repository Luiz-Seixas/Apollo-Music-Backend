import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { ISearch } from './interfaces/search';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/artist')
  searchArtist(@Body() artist: ISearch) {
    const { name } = artist;
    return this.appService.searchArtistsByName(name);
  }

  @Get('/search/work')
  searchWork(@Body() work: ISearch) {
    const { name } = work;
    return this.appService.searchWorksByName(name);
  }

  @Get('/browser')
  getWorks(@Body() artist: ISearch) {
    const { id } = artist;
    return this.appService.searchWorksByArtist(id);
  }

  @Get('/search/album')
  searchAlbum(@Body() artist: ISearch) {
    const { name } = artist;
    return this.appService.searchAlbumByName(name);
  }

  @Get('/find')
  findWork(@Body() artist: ISearch) {
    const { id } = artist;
    return this.appService.findWork(id);
  }
}
