import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes/index';
import { projectId, dataset } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Noplin Digital Blog Studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
