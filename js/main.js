import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addOpenModalHandlers, closeUploadInterface } from './picture-uploader/ulpoad-form.js';
import { addUserFormSubmitHandler } from './picture-uploader/validate-form.js';
import { getData } from './api/server.js';
import { showDataLoadErrorMessage, showDataUploadSuccessMessage, showDataUploadErrorMessage } from './api/data-status.js';

getData(renderThumbnails, showDataLoadErrorMessage);

addOpenModalHandlers();
addUserFormSubmitHandler(closeUploadInterface, showDataUploadSuccessMessage, showDataUploadErrorMessage);
