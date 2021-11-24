import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { IArtist } from './interfaces/artist';

@Controller('search')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/artist')
  getArtist(@Body() artist: IArtist) {
    const { name } = artist;
    return this.appService.searchArtist(name);
  }

  @Get('/browse')
  getArt(@Body() artist: IArtist) {
    const { id } = artist;
    return this.appService.browserWorks(id);
  }
}
