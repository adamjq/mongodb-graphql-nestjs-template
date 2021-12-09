import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Catalog, CatalogDocument } from './catalog.schema';

@Injectable()
export class CatalogService {
  constructor(
    @InjectModel(Catalog.name) private catalogModel: Model<CatalogDocument>,
  ) {}

  async findAll(): Promise<Catalog[]> {
    return this.catalogModel.find().exec();
  }
}
