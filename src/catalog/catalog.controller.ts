import { Controller, Get, Logger } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Catalog } from './catalog.schema';

@Controller('catalogs')
export class CatalogController {
  private readonly logger = new Logger(CatalogController.name);

  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  async findAll(): Promise<Catalog[]> {
    this.logger.log('Fetching all catalogs');
    return this.catalogService.findAll();
  }
}
