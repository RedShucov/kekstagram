import { createPhotosData } from './mock/mock-data-generator.js';
import { renderThumbnails } from './render-data/render-thumbnails.js';

const photosData = createPhotosData();

renderThumbnails(photosData);
