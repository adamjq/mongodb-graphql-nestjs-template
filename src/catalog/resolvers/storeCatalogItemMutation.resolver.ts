import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  CatalogItem as CatalogItemGQL,
  CatalogItemType as CatalogItemTypeGQL,
  StoreCatalogItemInput,
} from '../../graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { CatalogItem, CatalogItemDocument } from '../catalog.schema';

@Resolver()
export class StoreCatalogItemMutationResolver {
  private readonly logger = new Logger(StoreCatalogItemMutationResolver.name);

  constructor(
    @InjectModel(CatalogItem.name)
    private catalogModel: Model<CatalogItemDocument>,
  ) {}

  @Mutation('storeCatalogItem')
  async storeCatalogItem(
    @Args() item: StoreCatalogItemInput,
  ): Promise<CatalogItemGQL> {
    this.logger.log(`Storing Catalog Item: ${JSON.stringify(item)}`);

    return {
      id: '123',
      name: 'album-1',
      itemType: CatalogItemTypeGQL.ALBUM,
    };
  }
}
