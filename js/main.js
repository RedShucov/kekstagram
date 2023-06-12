import { createPhotosData } from './mock/mock-data-generator.js';
import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addOpenModalHandlers } from './picture-uploader/ulpoad-form.js';
import { addUserFormSubmitHandler } from './picture-uploader/validate-form.js';

const photosData = createPhotosData();

renderThumbnails(photosData);

addOpenModalHandlers();
addUserFormSubmitHandler();
