/* eslint-disable @typescript-eslint/no-explicit-any */
import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'a4h364a5',
  dataset: dataset || 'production',
});

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};
