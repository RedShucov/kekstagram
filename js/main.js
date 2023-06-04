import { createPhotosData } from './mock/mock-data-generator.js';
import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addModalHandlers } from './picture-uploader/ulpoad-form.js';

const photosData = createPhotosData();

renderThumbnails(photosData);

addModalHandlers();
