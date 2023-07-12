import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addOpenModalHandlers } from './picture-uploader/ulpoad-form.js';
import { addUserFormSubmitHandler } from './picture-uploader/validate-form.js';
import { getData } from './api/server.js';

getData(renderThumbnails);

addOpenModalHandlers();
addUserFormSubmitHandler();
