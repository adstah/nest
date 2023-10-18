import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateCatDto } from 'src/controllers/dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return 'created cat';
  }

  @Get('async-test')
  async getAsyncTest(): Promise<string> {
    return await new Promise<string>((res, rej) => {
      res('aaa');
      if (false) rej('bbb');
    });
  }

  @Get('info')
  getInfo(@Req() req: Request) {
    console.log(req);
  }

  @Get('breed')
  @HttpCode(203)
  @Header('Cache-Control', 'none')
  getBreed(): { breed: string } {
    return { breed: 'syiamise' };
  }

  @Get(':id')
  findOne(@Param() params: any): { name: string; breed: string } {
    // ALTERNATIVELY: findOne(@Param('id') id: string): { name: string; breed: string } {
    console.log(params);
    if (params.id === '1') return { name: 'bingo', breed: 'bango' };
  }

  //   @Put()
  //   @Delete()
  //   @Patch()
  //   @Options()
  //   @Head()
  //   @All()
}
