import { renderThumbnails } from './render-data/render-thumbnails.js';
import { addHandlerToOpenModal, closeUploadInterface } from './picture-uploader/ulpoad-form.js';
import { addHandlerToUserFormSubmit } from './picture-uploader/validate-form.js';
import { getData } from './api/server.js';
import { showDataLoadErrorMessage, showDataUploadSuccessMessage, showDataUploadErrorMessage } from './api/data-status.js';

getData(renderThumbnails, showDataLoadErrorMessage);

addHandlerToOpenModal();
addHandlerToUserFormSubmit(closeUploadInterface, showDataUploadSuccessMessage, showDataUploadErrorMessage);
