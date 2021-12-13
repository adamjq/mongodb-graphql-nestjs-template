/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CatalogItemType {
  ALBUM = 'ALBUM',
}

export interface StoreCatalogItemInput {
  name: string;
  itemType: CatalogItemType;
}

export interface IQuery {
  catalogItems():
    | Nullable<CatalogItemPage>
    | Promise<Nullable<CatalogItemPage>>;
}

export interface IMutation {
  storeCatalogItem(
    item: StoreCatalogItemInput,
  ): Nullable<CatalogItem> | Promise<Nullable<CatalogItem>>;
}

export interface CatalogItemPage {
  items: CatalogItem[];
}

export interface CatalogItem {
  id: string;
  name: string;
  itemType: CatalogItemType;
}

type Nullable<T> = T | null;
