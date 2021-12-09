import { Controller, Get, Logger } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.schema';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger(CatsController.name);

  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    this.logger.log('Fetching all cats');
    return this.catsService.findAll();
  }
}
