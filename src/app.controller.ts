import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { ISearch } from './interfaces/search';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/artist/:artist')
  searchArtist(@Param() artistObject: ISearch) {
    const { artist } = artistObject;
    return this.appService.searchArtistsByName(artist);
  }

  @Get('/search/work/:work')
  searchWork(@Param() workObject: ISearch) {
    const { work } = workObject;
    return this.appService.searchWorksByName(work);
  }

  @Get('/search/album/:album')
  searchAlbum(@Param() artistObject: ISearch) {
    const { album } = artistObject;
    return this.appService.searchAlbumByName(album);
  }

  @Get('/browser/:id')
  getWorks(@Param() artistObject: ISearch) {
    const { id } = artistObject;
    return this.appService.searchWorksByArtist(id);
  }

  @Get('/browser/artist/:id')
  getArtist(@Param() artistInfo: ISearch) {
    const { id } = artistInfo;
    return this.appService.browserArtistById(id);
  }

  // @Get('/find/:id')
  // findWork(@Param() artistObject: ISearch) {
  //   const { id } = artistObject;
  //   return this.appService.findWork(id);
  // }
}
