import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CatalogItemPage } from '../../graphql';
import { Query, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { CatalogItem, CatalogItemDocument } from '../catalog.schema';

@Resolver('CatalogItemPage')
export class CatalogItemsQueryResolver {
  private readonly logger = new Logger(CatalogItemsQueryResolver.name);

  constructor(
    @InjectModel(CatalogItem.name)
    private catalogModel: Model<CatalogItemDocument>,
  ) {}

  @Query('catalogItems')
  async getCatalogItemss(): Promise<CatalogItemPage> {
    this.logger.log('Returning Catalog Items');

    const catalogItems = await this.catalogModel.find().exec();
    this.logger.log(`Found items: ${catalogItems}`);

    return {
      items: [],
    };
  }
}
