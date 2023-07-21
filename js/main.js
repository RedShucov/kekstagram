import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addOpenModalHandlers, closeUploadInterface } from './picture-uploader/ulpoad-form.js';
import { addUserFormSubmitHandler } from './picture-uploader/validate-form.js';
import { getData } from './api/server.js';
import { dataLoadErrorHandler, showDataUploadSuccessMessage } from './api/data-status.js';

getData(renderThumbnails, dataLoadErrorHandler);

addOpenModalHandlers();
addUserFormSubmitHandler(closeUploadInterface, showDataUploadSuccessMessage);
