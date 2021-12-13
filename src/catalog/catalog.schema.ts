import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatalogItemDocument = CatalogItem & Document;

@Schema()
export class CatalogItem {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  itemType: string;
}

export const CatalogItemSchema = SchemaFactory.createForClass(CatalogItem);
