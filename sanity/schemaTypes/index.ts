import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './category';
import { authorType } from './author';
import { postType } from './post';

export const schemaTypes: SchemaTypeDefinition[] = [
  categoryType,
  authorType,
  postType,
];
