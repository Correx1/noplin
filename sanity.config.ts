import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes/index';

// Placeholder Project ID and Dataset for development.
// These need to be replaced with actual Sanity project details for production.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y81c0pnb';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

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
