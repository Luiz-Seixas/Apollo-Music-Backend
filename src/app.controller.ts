import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { IArtist, IWork } from './interfaces/artist';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/artist')
  searchArtist(@Body() artist: IArtist) {
    const { name } = artist;
    return this.appService.searchArtist(name);
  }

  @Get('/search/work')
  searchWork(@Body() work: IWork) {
    const { name } = work;
    return this.appService.searchWork(name);
  }

  @Get('/browser')
  getWorks(@Body() artist: IArtist) {
    const { id } = artist;
    return this.appService.browserWorks(id);
  }

  @Get('/find')
  findWork(@Body() artist: IArtist) {
    const { id } = artist;
    return this.appService.findWork(id);
  }
}
