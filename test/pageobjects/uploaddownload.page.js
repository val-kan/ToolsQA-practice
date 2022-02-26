const Page = require('./page');

class UploaddownloadPage extends Page {

    get buttonDownload() {
        return $('#downloadButton');
    }

    get buttonChooseFile() {
        return $('#uploadFile');
    }

    get labelSelectFile() {
        return $('label[for="uploadFile"]');
    }
    get labelUploadedFile() {
        return $('#uploadedFilePath');
    }

    open() {
        return super.open('upload-download');
    }
}

module.exports = new UploaddownloadPage();
