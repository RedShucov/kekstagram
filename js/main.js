import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addOpenModalHandlers } from './picture-uploader/ulpoad-form.js';
import { addUserFormSubmitHandler } from './picture-uploader/validate-form.js';
import { getData } from './api/server.js';
import { dataLoadErrorHandler } from './api/data-status.js';

getData(renderThumbnails, dataLoadErrorHandler);

addOpenModalHandlers();
addUserFormSubmitHandler();
