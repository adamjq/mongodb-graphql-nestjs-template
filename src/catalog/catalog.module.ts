import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogItemsQueryResolver } from './resolvers/catalogItemsQuery.resolver';
import { StoreCatalogItemMutationResolver } from './resolvers/storeCatalogItemMutation.resolver';
import { CatalogItem, CatalogItemSchema } from './catalog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CatalogItem.name, schema: CatalogItemSchema },
    ]),
  ],
  providers: [CatalogItemsQueryResolver, StoreCatalogItemMutationResolver],
})
export class CatalogModule {}
